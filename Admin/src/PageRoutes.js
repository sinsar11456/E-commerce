import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User"
import "./pageRoutes.css"
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productLists/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

export function PageRoutes() { 
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct/>} />
        </Routes>
      </div>
    </>
  )
}
   