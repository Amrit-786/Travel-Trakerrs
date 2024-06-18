import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import styles from '../styles/Cart.module.css'
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cartItems,removeFromCart} = useCart();
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },1000);

    

    return()=>clearTimeout(timer);
  },[]);

  if (loading) {
    return <div className={styles.loadingSpinner}></div>;
  }

 
  const handleRemove=(id)=>{
    removeFromCart(id);
  }

  if(cartItems.length===0){
    return <div className={styles.emptyCart}>Your cart is empty.</div>;
  }

  return (
    <>
     <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <div className={styles.cartItems}>
        {cartItems.map((item)=>(
          <div key={item.id} className={styles.cartItem}>
            <img src={item.card_img} alt={item.card_title} className={styles.cartItemImage}/>
            <div className={styles.cartItemDetails}>
              <h3>{item.card_title}</h3>
              <p>{item.price}</p>
              <button onClick={()=> handleRemove(item.id)} className={styles.removeButton}>Remove</button>
              </div>
              </div>
        ))}
      </div>
      <Link to = {'/booking'}><button className={styles.checkoutButton}>go to payment</button></Link> 
     </div>
     </>
  )
}

export default Cart