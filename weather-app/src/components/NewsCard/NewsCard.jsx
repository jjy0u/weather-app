import React from 'react'
import './NewsCard.scss'

const NewsCard = (props) => {
  const {url,source,title,image} = props
  return (
      <a href={url}>
        <div className='news-card'>
          <h3 className='news-card__title'>{title}</h3>
          <div className='news-card__img-container'>
            <img src={image} alt="" />
          </div>
        </div>
      </a>
  )
}

export default NewsCard