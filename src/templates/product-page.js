import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { motion } from "framer-motion"

// eslint-disable-next-line
export const ProductPageTemplate = ({
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
}) => (


  <div className="content">
    <div
      className="full-width-image-container margin-top-0 taust"
    >
      <motion.h2
        initial={{ opacity: 0, textShadow: '1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000' }}
        animate={{ opacity: 1, textShadow: '1px 1px 2px #124368, 0 0 1em #124368, 0 0 0.2em #124368' }}
        className="has-text-weight-bold is-size-1"
        style={{
          padding: '1rem',
          letterSpacing: '3.3px',
          lineHeight: '86%',
          fontWeight: '800',
          color: '#def7ed'
        }}
      >
        {title}
      </motion.h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </div>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    Tingimused, millele peab vastama koduleht, mida on lihtne turundada?
                  </h3>
                  <ul>
                    <li>
                      <p>Selgelt on määratud kes on kodulehe külastaja või sihtgrupp.</p>
                    </li>
                    <li><p>Mis on kodulehe eesmärk külastaja jaoks?</p></li>
                    <li><p>Mis on kodulehe eesmärk ettevõtte jaoks?</p></li>
                    <li><p>Mis on tegevused, mida ootad, et külastaja kodulehel teeks?</p></li>
                    <li><p>Omanäoline ja kvaliteetne sisu.</p></li>
                    <li><p>Selge üleskutse tegudele.</p></li>
                    <li><p>Hea kasutajakogemus ja funktsionaalsus. </p></li>
                    <li><p>Kasutatav kõigis seadmetes.</p></li>
                    <li><p>Ettevõtte kontakt ja asukoht on lihtsasti leitav.</p></li>
                  </ul>
                </div>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    Kodulehe turundus - kuidas seda ise teha?
                  </h3>
                  <ul>
                    <li>
                      <p>Google Business Profil - lisa oma ettevõte.</p>
                    </li>
                    <li>
                      <p>Tee kodulehele sisu ja tehniline analüüs.</p>
                    </li>
                    <li><p>Loo kodulehele omanäoline sisu.</p></li>
                    <li><p>Optimeeri kodulehe otsingumootoritele (SEO) ja sotsiaalmeediakanalite jaoks sobivaks.</p></li>
                    <li><p>Kasuta tasulist reklaami klientideni jõudmiseks.</p></li>
                  </ul>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image1} />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image2} />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <PreviewCompatibleImage imageInfo={main.image3} />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={testimonials} />
              <div className="column is-12 has-text-centered">
                <Link className="nis-size-4 btn" to="/kontaktid/">
                  Aitame kodulehe turundusel!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Helmet>
        <title>Kodulehe turundus - alusta ettevõtte turundust veebilehe abil</title>
        <meta name="description" content="TASUTA NIPID + Loe kuidas alustada ettevõtte kodulehe turundust. Milline on hea veebileht, mida on lihtne reklaamida. Kuidas leida abi kodulehe turundamisel. " />
      </Helmet >
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
      query ProductPage($id: String!) {
        markdownRemark(id: {eq: $id }) {
        frontmatter {
        title
        image {
        childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      heading
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
      main {
        heading
          description
      image1 {
        alt
            image {
        childImageSharp {
        gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
      image2 {
        alt
            image {
        childImageSharp {
        gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
      image3 {
        alt
            image {
        childImageSharp {
        gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
      testimonials {
        author
          quote
        }
      full_image {
        childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
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
      `;