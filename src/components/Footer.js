import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import map from "../img/social/map-marker-alt-solid.svg"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <p style={{
            color: '#ED3F1D',
            fontSize: '2.5rem',
            fontWeight: '650'
          }}>Telli koduleht</p>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns" style={{ maxWidth: '100vw' }}>
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
                <a title="facebook" href="https://www.google.ee/maps/place/O%C3%9C+Kodulehe+Tellimine/@57.7777957,26.0583111,16z/data=!4m5!3m4!1s0x46eba314827a2273:0x9353985c48f4520b!8m2!3d57.7777587!4d26.0598346">
                  <img
                    src={map}
                    alt="Google Maps"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer >
    )
  }
}

export default Footer
