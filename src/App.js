import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./views/Index";
import "./index.css";

import { useDispatch } from "react-redux";
import { getAuth } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(getAuth());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
