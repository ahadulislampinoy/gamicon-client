import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ bookingData }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { buyerEmail: email, resellPrice: price, _id } = bookingData;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      });
    if (confirmError) {
      setProcessing(false);
      setCardError(confirmError);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const paymentDetails = {
        email: email,
        transactionId: paymentIntent.id,
        price,
        bookingId: _id,
      };
      axios
        .post(`http://localhost:5000/payments`, paymentDetails)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Your payment successful!");
            setPaymentSuccess(true);
            setTransactionId(paymentIntent.id);
          }
          setProcessing(false);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="inline-block
          bg-gray-100
          text-black
          hover:bg-gray-200
          shadow
          md:text-sm
          font-semibold
          text-center
          rounded-lg
          outline-none
          transition
          duration-100
          p-3"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError.message}</p>
      {paymentSuccess && <p>Transaction id: {transactionId}</p>}
    </div>
  );
};

export default CheckoutForm;
