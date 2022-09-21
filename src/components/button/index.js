const Button = () =>{
    return (
        <button />
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