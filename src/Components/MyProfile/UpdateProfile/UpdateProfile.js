import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import useUserDetails from "./../../../CustomHook/useUserDetails";
import auth from "./../../../firebase.init";

const UpdateProfile = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [currentUser] = useUserDetails(user?.email);

  const [userName, setUserName] = useState(user?.displayName);

  //   const handleNameChange = (event) => {
  //     console.log(event.target.value);
  //   };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = process.env.REACT_APP_IMAGESTORAGEKEY;

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const updatedUser = {
            name: data.name,
            img: img,
            occupation: data.occupation,
            favouriteGames: data.favouriteGames,
          };
          // send to your database
          fetch(`https://pure-plains-35264.herokuapp.com/user/${id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updatedUser),
          })
            .then((res) => res.json())
            .then((modified) => {
              console.log(modified);
              if (modified.acknowledged) {
                toast.success("User Updated successfully");
                reset();
              } else {
                toast.error("Failed to Update User");
              }
            });
        }
      });
  };

  return (
    <div className="wrapper">
      <form className="p-3 mt-3">
        {/* Name Input Field */}
        <div>
          <label htmlFor="name">Your Name</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              placeholder="Your Name"
              value={userName ?? ""}
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="off"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span>{errors.name.message}</span>
              )}
            </label>
          </div>
        </div>
        {/* Email Input Field */}
        <div>
          <label htmlFor="email">Your Email</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              value={currentUser?.email}
              disabled
            />
          </div>
        </div>
        {/* Image Input Field */}
        <div>
          <label htmlFor="email">Your Image</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="file"
              placeholder="Your Email"
              className="input input-bordered"
              {...register("image")}
            />
          </div>
        </div>
        {/* Occupation Input Field */}
        <div>
          <label htmlFor="email">Your Occupation</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              placeholder="Your Occupation"
              className="input input-bordered"
              {...register("occupation")}
            />
          </div>
        </div>
        {/* Favourite Games Input Field */}
        <div>
          <label htmlFor="email">Your Favourite Games</label>
          <div className="form-field d-flex align-items-center">
            <input
              type="text"
              placeholder="Your Favourite Games"
              className="input input-bordered"
              {...register("favouriteGames")}
            />
          </div>
        </div>
        <input type="submit" value="Update" className="btn submitBtn" />
      </form>
    </div>
  );
};

export default UpdateProfile;
