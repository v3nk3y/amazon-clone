import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/15/shazam/US-GC-BdayHouseAd-cupcake-EN-980x55-2020122--CB423861092--gyj2e._V424069671_.jpg"
          alt=""
        />
        <div>
          <h3>Hello {!user ? "Guest" : user.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
