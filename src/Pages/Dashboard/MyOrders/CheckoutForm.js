import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SmallSpinner from "../../../components/Loader/SmallSpinner";

const CheckoutForm = ({ bookingData, refetch }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { buyerEmail: email, resellPrice: price, _id, productId } = bookingData;

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
        productId,
        bookingId: _id,
      };
      axios
        .post(`http://localhost:5000/payments`, paymentDetails)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Your payment successful!");
            setPaymentSuccess(true);
            setTransactionId(paymentIntent.id);
            axios
              .patch(
                `http://localhost:5000/update-sale-status?productId=${productId}&bookingId=${_id}`
              )
              .then((res) => {
                refetch();
              });
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
          bg-green-300
          text-black
          hover:bg-green-400
          shadow
          md:text-sm
          font-semibold
          text-center
          rounded-lg
          outline-none
          transition
          duration-100
          mt-5
          py-2 px-5"
          disabled={!stripe || processing || paymentSuccess}
        >
          {!stripe || processing ? (
            <SmallSpinner />
          ) : paymentSuccess ? (
            "Paid"
          ) : (
            "Pay"
          )}
        </button>
      </form>
      <div className="text-base font-medium">
        {cardError && <p className="mt-3 text-red-500">{cardError.message}</p>}
        {paymentSuccess && (
          <p className="mt-3">
            Transaction id:{" "}
            <span className="text-green-600">{transactionId}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
