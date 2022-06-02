import React from "react";
import { toast } from "react-hot-toast";

const CancelConfirmationModal = ({
  deletingOrder,
  refetch,
  setDeletingOrder,
}) => {
  const { gameName, _id } = deletingOrder;

  const handleDelete = () => {
    fetch(`https://pure-plains-35264.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast(`Order for ${gameName} is Canceled`);
          setDeletingOrder(null);
          refetch();
        }
      });
  };

  return (
    <div
      className="modal fade"
      id="cancelOrder"
      tabIndex="-1"
      aria-labelledby="cancelOrderLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="cancelOrderLabel">
              Cancel Confirmation
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to cancel your order for {gameName}?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => handleDelete()}
              type="button"
              className="btn btn-danger"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelConfirmationModal;
