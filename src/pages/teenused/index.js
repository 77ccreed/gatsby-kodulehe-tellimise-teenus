import React from 'react'

import Layout from '../../components/Layout'
import Helmet from 'react-helmet'
import BlogRoll from '../../components/BlogRoll'

import { motion } from "framer-motion"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Kodulehe tegemine ja veebilehe sisu loomine</title>
          <meta name="description" content="Sisu loomine, programmeerimine ning arvutialane konsultatsioon. Kõik vajalik ettevõtte veebilehe tegemiseks. Tasuta veebimajutus ja sisuhaldustarkvara." />
        </Helmet >
        <div
          className="full-width-image-container margin-top-0 taust"
        >
          <motion.h1
            initial={{ opacity: 0, textShadow: '1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000' }}
            animate={{ opacity: 1, textShadow: '1px 1px 2px #124368, 0 0 1em #124368, 0 0 0.2em #124368' }}
            className="has-text-weight-bold is-size-1"
            style={{
              padding: '1rem',
              letterSpacing: '3.3px',
              lineHeight: '86%',
              fontWeight: '800'
            }}
          >
            Teenused
          </motion.h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
