import React from 'react'
import './NewsWidget.scss'
import NewsCard from '../NewsCard/NewsCard'

const NewsWidget = (props) => {
    const {news} = props

    const newsWidgetJSX = news.map((newsArticle) => {
        return ( 
        <NewsCard
              url = {newsArticle.url}
              title = {newsArticle.title}
              image = {newsArticle.image}
              key = {newsArticle.id}
              />
          )
      })
    
  return (
    <div className='news-widget'>
        <h2>Top Stories</h2>
        {newsWidgetJSX}
    </div>
  )
}

export default NewsWidget