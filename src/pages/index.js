import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <Masonry className='showcase'>
      {data.allInstaNode.edges.map(({ node }) => (
        <div key={node.id} className='showcase__item'>
          <figure className='card'>
            <a rel='noopener noreferrer' target='_blank' href={`https://www.instagram.com/p/${node.id}/`} className='card__image'>
              <Img fluid={node.localFile.childImageSharp.fluid} />
            </a>
          </figure>
        </div>
      ))}
    </Masonry>

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
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    allInstaNode {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
