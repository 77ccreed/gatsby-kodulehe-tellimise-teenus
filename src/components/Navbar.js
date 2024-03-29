import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'

import { motion } from "framer-motion"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  color: '#024650',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>Telli koduleht</motion.p>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              aria-label="Ava menüü"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/meist/">
                Meist
              </Link>
              <Link className="navbar-item" to="/turundus/">
                Turundus
              </Link>
              <Link className="navbar-item" to="/teenused/">
                Teenused
              </Link>
              <Link className="navbar-item" to="/kontaktid/">
                Kontaktid
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/O%C3%9C-Kodulehe-Tellimine-111480883801254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
