import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import GameDetails from "./Components/Games/GameDetails/GameDetails";
import Games from "./Components/Games/Games";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login/Login";
import RequireAuth from "./Components/Login/RequireAuth/RequireAuth";
import SignUp from "./Components/Login/SignUp/SignUp";
import MyProfile from "./Components/MyProfile/MyProfile";
import UpdateProfile from "./Components/MyProfile/UpdateProfile/UpdateProfile";
import Payment from "./Components/Payment/Payment";
import Purchase from "./Components/Purchase/Purchase";
import Header from "./Components/Shared/Header/Header";
import NotFound from "./Components/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        />
        <Route
          path="updateProfile/:id"
          element={
            <RequireAuth>
              <UpdateProfile />
            </RequireAuth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
