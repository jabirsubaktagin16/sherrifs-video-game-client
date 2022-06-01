import React from "react";
import { useNavigate } from "react-router-dom";
import "./BuyNowBtn.css";

const BuyNowBtn = ({ id }) => {
  const navigate = useNavigate();

  const purchaseNavigate = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="d-grid gap-2">
      <button
        onClick={() => purchaseNavigate(id)}
        className="buyNow"
        type="button"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyNowBtn;
