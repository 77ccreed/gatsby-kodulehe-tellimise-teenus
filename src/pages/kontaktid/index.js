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
              <h1>Kirjuta, kuidas saame aidata.</h1>
              <p>Selgitame välja, kuidas Sinu toode või teenus inimesteni viia. Saada kiri või <a href="https://docs.google.com/forms/d/19NBnQIatfFF7wnhEhpYx81M0m40WFb8Jyxm37OZIcOw/" target="_blank" rel="noopener noreferrer"
                title="Kodulehe tellimise küsimustik">täida kodulehe tellimiseks küsimustik siin.</a></p>
              <hr />
              <form
                name="kontakt"
                method="post"
                action="/kontaktid/kiri-saadetud/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="kontakt" />
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
                    <label className="label" htmlFor={'ettevotte'}>
                      Ettevõtte nimi
                  </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'ettevotte'}
                        onChange={this.handleChange}
                        id={'ettevotte'}
                      />
                    </div>
                  </div>




                </div>




                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Sinu sõnum
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
                    Saada kiri
                  </button>
                </div>
              </form>
              <hr />
              <h3>OÜ Kodulehe Tellimine</h3>
              <p>Reg: 14933675</p>
              <p>Petseri tn. 8-53, 68204, Valga, Eesti</p>
              <p>Telefon: (+372) 56 8844 56</p>
              <p>E-mail: kiur.jullis@gmail.com</p>
              <p>Arveldusarve: SEB EE461010220285246226</p>
              <hr />
              {/* <a className="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdlZUuVoNFNecsp8M7wQ0zA_RhnkMMgndRmotmuEoMN5F3A5w/viewform" target="_blank" rel="noopener noreferrer"
    title="Hinda teenust ja kodulehte">Hinda teenust ja kodulehte</a>*/}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}