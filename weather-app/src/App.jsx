import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import NewsWidget from './components/NewsWidget/NewsWidget';

const App = () => {
  const [weather, setWeather] = useState([])
  const [news, setNews] = useState([])
  const [position, setPosition] = useState(['London'])
  const [searchTerm, setSearchTerm] = useState([''])
  const [isError, setIsError] = useState(false);

  const rootURL = `http://api.weatherapi.com/v1/forecast.json?key=43ecf8b9cc5944259d9222011231404&q=${position}&days=7&aqi=no&alerts=no`;
  console.log(rootURL)  

  const getWeather = async () => {
    const url = rootURL;
    //const res = await fetch(url + `?key=${process.env.REACT_APP_API_KEY}&q=${position}&days=7&aqi=no&alerts=no`)
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Invalid location entered');
    }
    const data = await res.json();
    setWeather(data)
  };

  const getNews = async () => {
    const url = "https://api.worldnewsapi.com/search-news";
    
    if (!position.includes(",")) {
      const res = await fetch(url + `?api-key=40b76bb1ccca4ac5ba49d51c4dceb7f5&number=3&location-filters=51.5072,0.1276,100&earliest-publish-date=2023-04-17`)
      const data = await res.json();
      setNews(data)
    } else {
      const res = await fetch(url + `?api-key=40b76bb1ccca4ac5ba49d51c4dceb7f5&number=3&location-filter=${position},100&earliest-publish-date=2023-04-17`)
      const data = await res.json();
      setNews(data)
    }
  };


  useEffect(() => {
    getWeather()
    getNews()
  }, [position])

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = position => {
    const { latitude, longitude } = position.coords;
    setPosition(`${latitude},${longitude}`)
  }

  const handleInput = async (event) => {
    event.preventDefault()
    setIsError(false);
    try {
      await getWeather();
    } catch (error) {
      setIsError(true)
      if(isError){
        window.alert(error.message);
      }

    }
    setPosition(searchTerm)
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const greetByTime = (timeString) => {
    const [hour, minute] = timeString.split(':');
    const currentTime = new Date();
    currentTime.setHours(hour);
    currentTime.setMinutes(minute);
  
    const currentHour = currentTime.getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning,';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Good afternoon,';
    } else {
      return 'Good evening,';
    }
  };
  
  
  return (
    <div className="App">
      {weather.current &&<h1 className='App__title'>{greetByTime(weather.location.localtime.split(" ")[1])} Jina</h1>}

        <div className='App__widgets'>
          {weather.current && <WeatherWidget current = {weather.current} forecast = {weather.forecast} forecasts = {weather.forecast.forecastday} hourForecasts = {weather.forecast.forecastday[0].hour} handleLocation = {getLocation} handleInput = {handleInput} handleSearchTerm={handleSearchTerm} location = {weather.location}/>}
          {news.news && <NewsWidget news={news.news}/>}
        </div>
    </div>
  );
}

export default App;
