import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=>state.user.currentUser);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />
      <Route
        path="/login"
        element={user ? (<Navigate replace to="/" />) : <Login />}
      />
      <Route
        path="/register"
        element={user ? <Navigate replace to="/" /> : <Register />}
      />
      {/* <Route path="/success" element={< />} /> */}
    </Routes>
  );
}

export default App;
