import * as React from "react";
import { Link } from 'gatsby'
import PropTypes from "prop-types";


const Button = ({ title, path }) => (
  <div className="columns">
    <div className="column is-12 has-text-centered">
      <Link to={path} className="nis-size-4 btn">
        {title}
      </Link>
    </div>
  </div>
);


Button.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};


export default Button



