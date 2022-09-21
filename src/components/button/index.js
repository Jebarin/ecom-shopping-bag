import styles from './styles.module.scss'

/**
 * Button Component
 * @param {*} props 
 * @returns 
 */
const Button = (props) =>{
    const {action, id, classes, busy, disabled, onClick, busyLabel, children} = props;

    return (
        <button
          type={action}
          id={id}
          className={`${styles.btn} ${classes}`}
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
  
export default Button;