import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import CancelConfirmationModal from "../../Shared/CancelConfirmationModal/CancelConfirmationModal";
import auth from "./../../../firebase.init";
import Loading from "./../../Shared/Loading/Loading";
import SingleOrder from "./SingleOrder/SingleOrder";

const MyOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const fetchMyOrders = async (key) => {
    const res = await fetch(
      `https://sherrifs-video-game-server.onrender.com/order?customer=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (res.status === 401 || res.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      toast("Please Sign In First");
      navigate("/login");
    }
    return res.json();
  };

  const { data: orders, isLoading, refetch } = useQuery("order", fetchMyOrders);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-center">My Orders</h2>

      <div className="row g-4">
        {orders?.map((order) => (
          <SingleOrder
            key={order._id}
            order={order}
            refetch={refetch}
            setDeletingOrder={setDeletingOrder}
          />
        ))}
      </div>
      {deletingOrder && (
        <CancelConfirmationModal
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        />
      )}
    </div>
  );
};

export default MyOrders;
