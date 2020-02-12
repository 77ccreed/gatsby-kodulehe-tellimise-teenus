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
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                'rgb(255, 68, 0, 0.7) 0.5rem 0px 0px, rgb(255, 68, 0, 0.7) -0.5rem 0px 0px',
              backgroundColor: 'rgb(255, 68, 0, 0.7)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Kõik teenused
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
