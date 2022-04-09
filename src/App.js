import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import "./index.css";
import "./file-upload-with-preview.css";

import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "./redux/slices/authSlice";
import { getCart, getShopCategories } from "./redux/slices/shopSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ShopAll from "./views/ShopAll";

import Profile from "./components/profile/Profile";
import ProfileProfile from "./components/profile/routes/Profile";
import ProfileOrders from "./components/profile/routes/Orders";
import ProfileAddress from "./components/profile/routes/Address";
import ProfileWishlist from "./components/profile/routes/Wishlist";

//admin
import Admin from "./components/admin/Admin";
import AdminOrders from "./components/admin/routes/AdminOrders";
import AdminCreateCat from "./components/admin/routes/AdminCreateCat";
import AdminPost from "./components/admin/routes/AdminPost";
import AdminAllItems from "./components/admin/routes/AdminAllItems";

//checkout
import Checkout from "./components/checkout/Checkout";
import CheckoutAddress from "./components/checkout/routes/CheckoutAddress";
import CheckoutDelivery from "./components/checkout/routes/CheckoutDelivery";
import CheckoutPayment from "./components/checkout/routes/CheckoutPayment";
import CheckoutReview from "./components/checkout/routes/CheckoutReview";

import ProtectedRoute from "./helpers/protectedRoute";
import { useEffect } from "react";

function App() {
  const authState = useSelector((state) => state.auth.auth);
  const categories = useSelector((state) => state.shop.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (categories === null) {
      dispatch(getShopCategories());
    }
  }, [categories, dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<ShopAll />} />
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

        <Route
          path="/checkout"
          element={
            <ProtectedRoute auth={authState}>
              <Checkout />
            </ProtectedRoute>
          }
        >
          <Route index element={<CheckoutAddress />} />
          <Route path="address" element={<CheckoutAddress />} />
          <Route path="delivery" element={<CheckoutDelivery />} />
          <Route path="payment" element={<CheckoutPayment />} />
          <Route path="review" element={<CheckoutReview />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>

        {/**admin routes */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminOrders />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="post" element={<AdminPost />} />
          <Route path="createcat" element={<AdminCreateCat />} />
          <Route path="allitems" element={<AdminAllItems />} />
        </Route>

        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
