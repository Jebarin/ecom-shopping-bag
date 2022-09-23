import Button from "../button";
import QuantityBox from "../quantityBox";
import styles from './lineItem.module.scss'

const LineItem = () =>{
    return (
        <div className={styles.item}>
            <img className={styles['item-image']} src="https://via.placeholder.com/150" />
            <div className={styles['item-details']}>
                <h2>Men's Jeans</h2>
                <div className={styles['item-details-block']}>
                    Price $55.00
                    <QuantityBox/>
                </div>
                <div className={styles['item-details-block']}>
                    <Button>Remove</Button>
                    <Button>Save For Later</Button>
                </div>
            </div>
        </div>
    )
}

export default LineItem;