import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>Kodulehe tellimine. Täida küsimustik ja kohtume</title>
          <meta name="description" content="Kohtumine aitab välja selgitada, mida on vaja eduka kodulehe loomiseks. Täpsustame tööde sisu, mahu ja orienteeruva ajakulu ning hinna." />
        </Helmet >
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Ettevõtte kodulehe tellimine</h1>
              <form
                name="contact"
                method="post"
                action="/kodulehe-tellimine/tellimus-tehtud/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

                <div className='columns'>

                  <div className="field column">
                    <label className="label" htmlFor={'name'}>
                      Sinu nimi
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        onChange={this.handleChange}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'telefon'}>
                      Telefoninumber
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'tel'}
                        name={'telefon'}
                        onChange={this.handleChange}
                        id={'telefon'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'email'}>
                      E-mail
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        onChange={this.handleChange}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'aadress'}>
                      Aadress
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'aadress'}
                        onChange={this.handleChange}
                        id={'aadress'}
                      />
                    </div>
                  </div>

                </div>




                <div className='columns'>

                  <div className="field column">
                    <label className="label" htmlFor={'kodulehe-nimi'}>
                      Kodulehe nimi
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'kodulehe-nimi'}
                        onChange={this.handleChange}
                        id={'kodulehe-nimi'}
                      />
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'tegevusala'}>
                      Tegevusala
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'tegevusala'}
                        onChange={this.handleChange}
                        id={'tegevusala'}
                      />
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'tegevuspiirkond'}>
                      Tegevuspiirkond
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'tegevuspiirkond'}
                        onChange={this.handleChange}
                        id={'tegevuspiirkond'}
                      />
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'konkurendid'}>
                      Konkurendid
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'konkurendid'}
                        onChange={this.handleChange}
                        id={'konkurendid'}
                      />
                    </div>
                  </div>

                </div>


                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Kirjuta oma soovidest lähemalt
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>


                <div className="field column is-half">
                  <button className="button is-link" type="submit">
                    Saada
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}