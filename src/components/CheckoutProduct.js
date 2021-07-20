import React from 'react';

import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, qty,hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <b>$</b>
                    <strong>{price}</strong>
                </p>
                <p className='checkoutProduct__title'>Quantity: {qty}</p>
               
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}<br/><br/><br/><br/>
            </div>
        </div>
    )
}

export default CheckoutProduct