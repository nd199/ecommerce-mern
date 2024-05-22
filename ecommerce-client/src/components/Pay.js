import "./Pay.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Pay = () => {
  return (
    <div className="pay">
      <PayPalScriptProvider>
        <PayPalButtons />
      </PayPalScriptProvider>
    </div>
  );
};

export default Pay;
