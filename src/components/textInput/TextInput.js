import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = ({
  id,
  autoFocus,
  hint,
  value,
  onChange,
  onKeyPress,
  focusOnBlur,
  onBlur,
}) => (
  <input
    id={id}
    className="input"
    ref={focusOnBlur ? (input) => { this.inputRef = input; } : null}
    type="text"
    autoFocus={autoFocus}
    placeholder={hint}
    value={value}
    onChange={onChange}
    onBlur={focusOnBlur ? () => { this.inputRef.focus(); } : onBlur}
    onKeyPress={onKeyPress}
    autoComplete="off"
    autoCorrect="off"
    spellCheck="false"
  />
);

TextInput.propTypes = {
  id: PropTypes.string,
  autoFocus: PropTypes.bool,
  hint: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  focusOnBlur: PropTypes.bool,
  onBlur: PropTypes.func,
};

TextInput.defaultProps = {
  id: null,
  autoFocus: false,
  hint: null,
  value: null,
  onChange: null,
  onKeyPress: null,
  focusOnBlur: false,
  onBlur: null,
};

export default TextInput;
