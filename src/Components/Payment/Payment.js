import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "./../Shared/Loading/Loading";
import CheckOutForm from "./CheckOutForm/CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLEKEY);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;

  const { data: singleOrder, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="wrapper">
        <div className="text-center">
          <h1>Payment for {singleOrder.gameName}</h1>
        </div>
        <p>
          Dear {singleOrder.customerName}, Your payment for order{" "}
          {singleOrder._id} is pending. Please pay the bill.
        </p>
        <div className="mt-6">
          <Elements stripe={stripePromise}>
            <CheckOutForm singleOrder={singleOrder} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
