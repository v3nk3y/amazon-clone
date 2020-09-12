import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // To generate the Special-Stripe-Secret that allows to charge
    const getClientSecret = async () => {
      // axios - for making api requests
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies sub-units i.e if $1 = 100Cents
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      console.log("The SECRET is ------>>>> ", response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]); // Every time the items in basket changes

  const handleSubmit = async (event) => {
    // To handle stripe payments
    event.preventDefault();
    setProcessing(true);
    const cardElement = elements.getElement(CardElement);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent is just like a payment confirmation
        setSucceeded(true);
        setProcessing(false);
        setError(null);
        history.replace("/");
      });
  };

  const handleChange = (e) => {
    // To handle card detail changes and handle errors
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>523 Mariener Terr</p>
            <p>Toronto, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Totoal: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
