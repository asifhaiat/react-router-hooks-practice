import React from 'react';
import './TShirts.css';

const TShirts = (props) => {
    const {handleAddToCart, tShirt} = props;
    const {name, picture, price} = props.tShirt;
    return (
        <div className='t-shirts'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirts;