import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <p style={{
            color: '#ff4400',
            fontSize: '2.5rem',
            fontWeight: '650'
          }}>Telli koduleht</p>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Pealeht
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/meist/">
                        Meist
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/turundus/">
                        Turundus
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Administraatorile
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/teenused/">
                        Teenused
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/kontaktid/">
                        Kontaktid
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/privaatsuspoliitika/">
                        Privaatsuspoliitika
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/teenusetingimused/">
                        Teenuse tingimused
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/O%C3%9C-Kodulehe-Tellimine-111480883801254/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* <div className="content has-text-centered">

          <p className="has-text-grey">OÜ Kodulehe Tellimine | +(372) 5688 4456 | Valga, Petseri 8-53,	68204</p>
        </div>
        */}
      </footer>
    )
  }
}

export default Footer
