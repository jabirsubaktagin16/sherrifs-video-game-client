import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useGameDetails from "./../../CustomHook/useGameDetails";
import auth from "./../../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [game] = useGameDetails(id);
  const navigate = useNavigate();

  const handleOrder = (event) => {
    event.preventDefault();
    const order = {
      gameId: game._id,
      gameName: game.name,
      price: game.price,
      customer: user?.email,
      customerName: user?.displayName,
      contactNo: event.target.customerContact.value,
    };

    fetch("https://pure-plains-35264.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`Your Order for ${game.name} is Confirmed`);
        navigate("/");
      });
  };

  return (
    <div className="wrapper">
      <div className="text-center">
        <h1>Purchase Form</h1>
      </div>
      <form onSubmit={handleOrder} className="p-3 mt-3">
        {/* Game Name Input Field */}
        <div>
          <label htmlFor="gameName">Name of Game</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              name="gameName"
              value={game.name}
              className="input input-bordered"
              disabled
              readOnly
            />
          </div>
        </div>
        {/* Customer Name Input Field */}
        <div>
          <label htmlFor="customerName">Name of Customer</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered"
              readOnly
              disabled
            />
          </div>
        </div>
        {/* Customer Email Input Field */}
        <div>
          <label htmlFor="customerEmail">Email of Customer</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="email"
              value={user?.email}
              className="input input-bordered"
              readOnly
              disabled
            />
          </div>
        </div>
        {/* Customer Contact No Input Field */}
        <div>
          <label htmlFor="customerContact">Contact No. of Customer</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              name="customerContact"
              placeholder="Enter Your Contact No."
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          className="btn submitBtn mt-3"
          value="Confirm Order"
        />
      </form>
    </div>
  );
};

export default Purchase;
