import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import { motion } from "framer-motion"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div
        className="taust margin-top-0"
        style={{
          //backgroundImage: `url(${
          // !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          // })`,
          //backgroundPosition: `top left`,
          //backgroundAttachment: `fixed`,
          //background: '#EEF6FC',
          //backgroundImage: 'linear-gradient(to right, #145A8A, #1C81C4)',

          //clipPath: ' polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0)'
        }}
      >
        <div
          style={{
            display: 'flex',
            //height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
            margin: '5px',
            fontSize: '200%'
          }}
        >
          <motion.h1
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              //boxShadow:
              //'rgb(31, 53, 77, 0.5) 0.5rem 0px 0px, rgb(31, 53, 77, 0.5) -0.5rem 0px 0px',
              //backgroundColor: 'rgb(31, 53, 77, 0.5)',

              //lineHeight: '1',
              //padding: '0.25em',
              //fontFamily: 'Georgia'


              letterSpacing: '3.3px',
              lineHeight: '86%',
              fontWeight: '800'


            }}
          >
            {title}
          </motion.h1>
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              //boxShadow:
              //'rgb(31, 53, 77, 0.5) 0.5rem 0px 0px, rgb(31, 53, 77, 0.5) -0.5rem 0px 0px',
              //backgroundColor: 'rgb(31, 53, 77, 0.5)',
              //lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </motion.h4>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h2 className="title is-size-3">{mainpitch.title}</h2>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle is-size-4">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2 is-size-3-mobile">
                        {heading}
                      </h3>

                      <div className="column is-12 has-text-centered">
                        <a className="is-size-4 btn" href="https://docs.google.com/forms/d/e/1FAIpQLSe9TPVo1_SMyTlpZ6Vo0StZv0H5aoo2-K_P01o9woEdOdUsMA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"
                          title="Ava tellimise leht">Ava tellimise leht</a>
                      </div>

                      <p>{description}</p>
                    </div>
                  </div>

                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <a className="is-size-4 btn" href="https://docs.google.com/forms/d/e/1FAIpQLSe9TPVo1_SMyTlpZ6Vo0StZv0H5aoo2-K_P01o9woEdOdUsMA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer"
                        title="Ava tellimise leht"
                      >Ava tellimise leht</a>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Kaasaegsed, lihtsad ja hästi töötavad lahendused
                  </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/turundus/">
                        Ava turunduse leht
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
        frontmatter {
        title
        image {
        childImageSharp {
        fluid(maxWidth: 2048,quality: 100) {
        ...GatsbyImageSharpFluid
      }
      }
    }
    heading
    subheading
        mainpitch {
        title
          description
    }
    description
        intro {
        blurbs {
        image {
        childImageSharp {
        fluid(maxWidth: 240, quality: 64) {
        ...GatsbyImageSharpFluid
      }
      }
    }
    text
  }
  heading
  description
}
}
}
}
`
