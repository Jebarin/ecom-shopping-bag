import React from 'react';
import styles from './button.module.scss'

/**
 * Button Component
 * @param {*} props 
 * @returns 
 */
const Button = (props) =>{
    const {action, id, className, busy, disabled, onClick, busyLabel, children} = props;

    return (
        <button
          type={action}
          id={id}
          className={`${styles.btn} ${className}`}
          disabled={busy || disabled}
          onClick={onClick}
        >
          {busy ? busyLabel : children}
        </button>
    )
};

Button.defaultProps = {
    action: 'button',
    id: null,
    className: '',
    disabled: false,
    onClick: null,
    busy: false,
    busyLabel: 'Processing...',
    children: "Submit"
};
  
export default React.memo(Button);