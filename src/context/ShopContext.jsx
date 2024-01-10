import React, { createContext, useState } from 'react'
import all_product from '../component/assets/all_product'


export const ShopContext=createContext(null)

const getDefaultCart=()=>{
    let cart={};

    for(let index=0; index<all_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [cartItems, setCartItems]=useState(getDefaultCart())
  
    // console.log(cartItems);
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);

    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // for total price
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item]
            }
        }
        // console.log(totalAmount);
        return totalAmount;
    }

    // show to product in navbar
    const getTotalCartItem=()=>{
        let totalItem=0
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        console.log(totalItem)
        return totalItem
    }
      
    const contextValue={all_product,getTotalCartItem, getTotalCartAmount, cartItems, addToCart, removeFromCart}
    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider