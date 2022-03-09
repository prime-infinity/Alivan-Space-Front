import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import "./index.css";

import { useDispatch } from "react-redux";
import { getAuth } from "./redux/slices/authSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Profile from "./components/profile/Profile";
import ProfileProfile from "./components/profile/routes/Profile";
import ProfileOrders from "./components/profile/routes/Orders";
import ProfileAddress from "./components/profile/routes/Address";
import ProfileWishlist from "./components/profile/routes/Wishlist";

function App() {
  const dispatch = useDispatch();
  dispatch(getAuth());

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<ProfileProfile />} />
          <Route path="profile" element={<ProfileProfile />} />
          <Route path="orders" element={<ProfileOrders />} />
          <Route path="address" element={<ProfileAddress />} />
          <Route path="wishlist" element={<ProfileWishlist />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
