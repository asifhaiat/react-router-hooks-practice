import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../Hooks/useTShirts';
import TShirts from '../TShirts/TShirts';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    // handle add to cart button
    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exists){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert("Hey! What are you doing? Items already added to your cart")
        }
        
    }

    // remove cart item
    const handleRemoveFromCart = (selectedItem) =>{
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="tshirts-container">
                {
                    tShirts.map(tShirt => <TShirts
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                        
                    ></TShirts>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;