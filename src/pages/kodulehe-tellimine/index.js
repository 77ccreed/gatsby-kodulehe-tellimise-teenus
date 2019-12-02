import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

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
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Telli endale koduleht</h1>
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
                        required={true}
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
                        required={true}
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
                        required={true}
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
                        required={true}
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
                        required={true}
                      />
                    </div>
                  </div>

                </div>







                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Kirjuta kodulehest lähemalt
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






                <div className='columns'>

                  <div className='field column is-half'>
                    <h3>Kodulehe sisu. Tekst, pildid ja logo.</h3>
                    <div className="control">
                      <label className="radio label" htmlFor={'tekstPildidLogo'}>
                        <input type="radio" name="sisuOn" id={'tekstPildidLogo'} />
                        Mul on kodulehe tekst, pildid ja logo olemas.</label>
                      <label className="radio label" htmlFor={'tekstPildid'}>
                        <input type="radio" name="sisuOn" id={'tekstPildid'} />
                        Mul on kodulehe tekst ja pildid. Logo pole.</label>
                      <label className="radio label" htmlFor={'tekst'}>
                        <input type="radio" name="sisuOn" id={'tekst'} />
                        Mul on kodulehe tekst. Pilte pole.</label>
                      <label className="radio label" htmlFor={'pildid'}>
                        <input type="radio" name="sisuOn" id={'pildid'} />
                        Mul pole kodulehe teksti. Pildid on.</label>
                      <label className="radio label" htmlFor={'sisuPole'}>
                        <input type="radio" name="sisuOn" id={'sisuPole'} />
                        Mul pole kodulehe teksti ega pilte.</label>
                    </div>
                  </div>


                </div>


                <div className='columns'>

                  <div className='field column'>
                    <h3>Domeen</h3>
                    <div className="control">
                      <label className="radio label" htmlFor={'domeenOn'} >
                        <input
                          type="radio"
                          name="domeenOlemas"
                          id={'domeenOn'}
                          onChange={this.handleChange}
                        />
                        Mul on endal kodulehe domeen olemas.</label>
                      <label className="radio label" htmlFor={'domeenPole'} >
                        <input
                          type="radio"
                          name="domeenOlemas"
                          id={'domeenPole'}
                          onChange={this.handleChange}
                        />
                        Mul pole kodulehe domeeni.</label>
                    </div>
                  </div>

                  <div className="field column">
                    <label className="label" htmlFor={'domeen'}>
                      Sisesta domeeninimi, mida soovid kasutada:
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'domeen'}
                        onChange={this.handleChange}
                        id={'domeen'}
                      />
                    </div>
                  </div>


                </div>


                <h3>Kohtumispaigana sobib:</h3>
                <div className='field column is-half'>
                  <div className="control">
                    <label className="radio label" htmlFor={'tallinn'}>
                      <input type="radio" name="kohtumispaik" id={'tallinn'} />
                      Tallinn</label>
                    <label className="radio label" htmlFor={'tartu'}>
                      <input type="radio" name="kohtumispaik" id={'tartu'} />
                      Tartu</label>
                    <label className="radio label" htmlFor={'valga'}>
                      <input type="radio" name="kohtumispaik" id={'valga'} />
                      Valga</label>
                    <label className="radio label" htmlFor={'eiSooviKohtuda'}>
                      <input type="radio" name="kohtumispaik" id={'eiSooviKohtuda'} />
                      Ei soovi kohtuda</label>
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