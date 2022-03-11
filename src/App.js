import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import "./index.css";

import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "./redux/slices/authSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Profile from "./components/profile/Profile";
import ProfileProfile from "./components/profile/routes/Profile";
import ProfileOrders from "./components/profile/routes/Orders";
import ProfileAddress from "./components/profile/routes/Address";
import ProfileWishlist from "./components/profile/routes/Wishlist";

import ProtectedRoute from "./helpers/protectedRoute";
import { useEffect } from "react";

function App() {
  const authState = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute auth={authState}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileProfile />} />
          <Route path="profile" element={<ProfileProfile />} />
          <Route path="orders" element={<ProfileOrders />} />
          <Route path="address" element={<ProfileAddress />} />
          <Route path="wishlist" element={<ProfileWishlist />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
