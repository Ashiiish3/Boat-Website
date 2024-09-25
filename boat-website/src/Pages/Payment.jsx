import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = ({ totalPrice }) => {
  const [orderID, setOrderID] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: totalPrice || "10.00",
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(() => {
      setIsPaid(true);
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQQmQ3NXAGg2URXaJm25BbadQM7-kXhr6-lfBLTXSJk2D0vL_DOFyfvaGIhWrTkifBg_72ntZLH2XMxu",
      }}
    >
      <div className="flex flex-col justify-center">
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          style={{ layout: "horizontal" }}
        />
        {isPaid && (
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Payment successful
          </button>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default Payment;