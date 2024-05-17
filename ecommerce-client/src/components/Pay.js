import React, { useEffect, useState } from "react";
import "./Pay.css";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const key="pk_test_51PHLFKSAl2wJzNYYaTNejzCZ77DPXKqvaP6seGLjKVr2lWKhYfDlzkXeixHoaKC7xnUfBqmjHDcrJJGrIMDr6Pmv00LONN8pQz";

const Pay = () => {
  const [token, setToken] = useState(null);

  const onToken = (token) => {
    setToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/checkout/payment",
          {
            tokenId: token.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    token && makeRequest();
  }, [token]);

  return (
    <div>
      <StripeCheckout
        className="checkout_pay"
        name="codeNaren ecommerce"
        image="images/logo-no-background.png"
        billingAddress
        shippingAddress
        description="Your Total : Rs 20"
        amount={2000}
        token={onToken}
        stripeKey={key}
      >
        <button className="order">ORDER NOW</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
