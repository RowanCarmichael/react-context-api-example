import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ id, onClick, label }) => (
  <button
    id={id}
    className="button"
    onClick={onClick}
  >
    {label}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  id: null,
  onClick: null,
  label: null,
};

export default Button;
