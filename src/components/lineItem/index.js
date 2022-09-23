import React from 'react';
import Button from "../button";
import QuantityBox from "../quantityBox";
import styles from './lineItem.module.scss'

const LineItem = (props) =>{
    const {itemId, quantity, itemName, salesPrice, itemImage, onRemoveItem, onQuantityUpdate, qtyReadOnly} = props;

    if(!itemId) return null

    return (
        <div className={styles.item}>
            <img className={styles['item-image']} alt="product" src={itemImage} />
            <div className={styles['item-details']}>
                <h2>{itemName}</h2>
                <div className={styles['item-details-block']}>
                    Price ${salesPrice}
                    <QuantityBox onChange={(qty) => onQuantityUpdate?.(itemId, qty)}  defaultQty={quantity} qtyReadOnly={qtyReadOnly}  />
                </div>
                <div className={styles['item-details-block']}>
                    <Button onClick={() => onRemoveItem?.(itemId)}>Remove</Button>
                    <Button>Save For Later</Button>
                </div>
            </div>
        </div>
    )
}

LineItem.defaultProps = {
    onRemoveItem: null,
    onQuantityUpdate: null,
    qtyReadOnly: false
}

export default React.memo(LineItem);