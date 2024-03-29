import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Pricing from '../components/Pricing'
import Button from '../components/Button'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import { motion } from "framer-motion"

// eslint-disable-next-line
export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  pricing
}) => (
  <div>
    <div
      className="taust margin-top-0"
    >
      <div
        style={{
          display: 'flex',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          margin: '5px',
          fontSize: '200%'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, textShadow: '1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000' }}
          animate={{ opacity: 1, textShadow: '1px 1px 2px #124368, 0 0 1em #124368, 0 0 0.2em #124368' }}
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            letterSpacing: '3.3px',
            lineHeight: '86%',
            fontWeight: '800',
            color: '#def7ed'
          }}
        >
          {title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30, textShadow: '1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000' }}
          animate={{
            opacity: 1, y: 0, textShadow: '1px 1px 2px #124368, 0 0 1em #124368, 0 0 0.2em #124368'
          }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            padding: '0.25em',
            color: '#def7ed'
          }}
        >
          {subheading}
        </motion.h2>
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
                      <Button path='/teenused/sisu-loomine/' title='Loe sisuloomest' />
                    </div>
                    <p className="card-disain2" style={{
                      clipPath: "polygon(0 0, 100% 0, 98% 98%, 0% 100%)",
                    }}>{description}</p>
                  </div>
                </div>

                <Features gridItems={intro.blurbs} />

                <Button path='/teenused/kodulehe-tegemine/' title='Loe kodulehe tegemisest' />

                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Telli kodulehe tegemisega seotud teenus
                  </h3>
                  <BlogRoll />
                  <Button path='/kontaktid/' title='Saada meile kiri!' />
                  <h3 className="has-text-weight-semibold is-size-2">
                    {pricing.heading}
                  </h3>
                  <p className="is-size-5">{pricing.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Pricing data={pricing.plans} />
            </div>
          </div>

        </div>
      </div >
    </section >
  </div >
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
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
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
        pricing={frontmatter.pricing}
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
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
    text
  }
  heading
  description
}
      pricing {
        heading
          description
      plans {
        description
            items
      plan
      price
          }
        }
}
}
}
`
