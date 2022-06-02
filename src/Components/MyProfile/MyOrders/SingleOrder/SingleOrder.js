import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SingleOrder.module.css";

const SingleOrder = ({ order, refetch, setDeletingOrder }) => {
  const { _id, gameName, price, gameId } = order;

  const navigate = useNavigate();

  const handlePayment = (id) => navigate(`/payment/${id}`);

  return (
    <div className="col-md-6 col-lg-6">
      <div className={styles.singleOrderCard}>
        <div className="text-center">
          <h5>{gameName}</h5>
          <p>
            <strong>Order ID: </strong>
            {_id}
          </p>
          <p>
            <strong>Bill: </strong>${price}
          </p>
          <p>
            <strong>Payment Status: </strong>
            {order.price && !order.paid && (
              <span style={{ color: "red" }}>Not Paid</span>
            )}
            {order.price && order.paid && (
              <span style={{ color: "green" }}>Paid</span>
            )}
          </p>
          <p>
            <strong>Transaction ID: </strong>
            {!order.transactionId && (
              <span style={{ color: "red" }}>Not Paid</span>
            )}
            {order.transactionId && <span>{order.transactionId}</span>}
          </p>
          {!order.paid && (
            <div className="d-flex flex-column">
              <button
                onClick={() => handlePayment(_id)}
                type="button"
                className="btn btn-success"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>Pay</span>
                  <FontAwesomeIcon icon={faMoneyBill} />
                </div>
              </button>
              <button
                onClick={() => setDeletingOrder(order)}
                type="button"
                className="btn btn-danger mt-2"
                data-bs-toggle="modal"
                data-bs-target="#cancelOrder"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>Cancel Order</span>
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
