import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering
    // 1. element variable
    let command;
    if (cart.length === 0){
        command = <h3>Please! add at least one item</h3>
    }
    else if(cart.length === 1){
        command = <h3>Do you want to add more...?</h3>
    }
    
    // else{
    //     command = <h3>Thank you!</h3>
    // }
    // 2.ternary operator
    return (
        <div>
            <h3>Items Selected: {cart.length}</h3>
            {
                cart.map(tShirt => 
                <p>
                    {tShirt.name}
                    <button  onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            
            {command}
            {cart.length !== 4 ? <p></p> : <button>Clear ALL</button>}
        </div>
    );
};

export default Cart;