import React from 'react';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

function Button({ children, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
      {children}
    </button>
  );
}

export default Button;
