import React from 'react';
import './button.styles.scss'

/* 
Default
Inverted
Google Sign In
*/

const BUTTON_TYPES_CLASSES = {
    default: 'default',
    inverted: 'inverted', 
    google: 'google-sign-in'

}

const Button = ({children, buttonTypes, ...otherProps}) => {
  return (
    <button className={`button-container  ${BUTTON_TYPES_CLASSES[buttonTypes]}`} {...otherProps}>{children}</button>
  )
}

export default Button