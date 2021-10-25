import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

import { connect } from "react-redux";
const Cart = ({cart}) => {
   const [tottalPrice,setTotalPrice]=useState(0);
   const [tottalItem,setTotalItems]=useState(0);
   
   useEffect(()=>{
     let items =0;
     let price =0;

     cart.forEach((item)=>{
       items += item.qty;
       price += item.qty * item.price;
     });
 
     setTotalItems(items);
     setTotalPrice(price);

   },[cart,tottalPrice,tottalItem,setTotalPrice,setTotalItems])
 
  return (
    <div className="container-fluid row d-flex mx-auto mt-5 cart">
      <div className="cart_items col-lg-8 d-flex flex-column gap-3">
        {
          cart.map((item)=>(
            <CartItem key={item.id} item={item}/>
          ))
        }
      </div>
      <div className="proceed_checkout col-lg-4 checkout" style={{ height: "250px" }}>
        <div className="row d-flex flex-column gap-5 container m-0">
          <h2 className="mt-3">Cart Summary </h2>
          <div className="d-flex justify-content-between  align-items-center">
            {" "}
            <p>Totatl Items : {tottalItem} </p> <h2>${tottalPrice}</h2>{" "}
          </div>
          <button className="btn btn-outline-success">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps =(state)=>{
  return{
    cart : state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart);
