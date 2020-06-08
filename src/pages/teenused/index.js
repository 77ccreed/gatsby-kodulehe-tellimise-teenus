import React from 'react'

import Layout from '../../components/Layout'
import Helmet from 'react-helmet'
import BlogRoll from '../../components/BlogRoll'

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
        //style={{
        // backgroundImage: `url('/img/kodulehe-tegemine-taustapilt.jpg')`,
        //}}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow:
              //  'rgb(31, 53, 77, 0.5) 0.5rem 0px 0px, rgb(31, 53, 77, 0.5) -0.5rem 0px 0px',
              // backgroundColor: 'rgb(31, 53, 77, 0.5)',
              //backgroundImage: 'linear-gradient(to right, rgb(31, 53, 77, 0.6) , rgb(236, 240, 244,0.2)',
              padding: '1rem',
              letterSpacing: '3.3px',
              lineHeight: '86%',
              fontWeight: '800'
            }}
          >
            Teenused
          </h1>
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
