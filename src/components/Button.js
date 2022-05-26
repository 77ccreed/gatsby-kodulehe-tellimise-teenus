import * as React from "react";
import { Link } from 'gatsby'
import PropTypes from "prop-types";


const Button = ({ title, path }) => (
  <Link to={path} className="nis-size-4 btn">
    {title}
  </Link>
);


Button.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};


export default Button



