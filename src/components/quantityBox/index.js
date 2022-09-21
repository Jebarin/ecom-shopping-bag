import {useState, useEffect} from 'react';

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 10;

/**
 * Component QuantityBox
 * @returns 
 */
const QuantityBox = (props) => {
    const {defaultQty, onChange, minQuanity, maxQuantity} = props;
    const [quanity, setQuantity] = useState(defaultQty);

    const updateQuantity = (qty) => {
        setQuantity(qty);
        onChange?.(qty);
    };

    const increaseQuantity = () => updateQuantity(quanity+1);
    const decreaseQuantity = () => updateQuantity(quanity-1);

    useEffect(() => {
        setQuantity(defaultQty);
    }, [defaultQty]);

    return (
        <div>
            <button data-testid="quantity-decrease" disabled={quanity <= minQuanity} onClick={decreaseQuantity}>-</button>
                <div data-testid="quantity-box">{quanity}</div>
            <button data-testid="quantity-increase" disabled={quanity >= maxQuantity} onClick={increaseQuantity}>+</button>
        </div>
    )
}

QuantityBox.defaultProps = {
    minQuanity: MIN_QUANTITY,
    maxQuantity: MAX_QUANTITY,
    onChange: null,
    defaultQty: 1
}

export default QuantityBox;