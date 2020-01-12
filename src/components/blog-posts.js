import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'

export default ({ data }) => (
  <Masonry className='showcase'>
    {data.allDatoCmsWork.edges.map(({ node: work }) => (
      <div key={work.id} className='showcase__item'>
        <figure className='card'>
          <Link to={`/works/${work.slug}`} className='card__image'>
            <Img fluid={work.coverImage.fluid} />
          </Link>
          <figcaption className='card__caption'>
            <h6 className='card__title'>
              <Link to={`/works/${work.slug}`}>{work.title}</Link>
            </h6>
            <div className='card__description'>
              <p>{work.excerpt}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    ))}
  </Masonry>
)
