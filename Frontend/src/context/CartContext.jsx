import { children, createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (tour) => {
        const check=cartItems.some(tours=>tours.id===tour.id)
        if(!check){
            setCartItems((prev)=> [...prev,tour]);
        }
       
    }

    const removeFromCart= (id)=>{
        setCartItems((prev)=> prev.filter(item=> item.id !== id));
    };

    return(
        <CartContext.Provider value ={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
