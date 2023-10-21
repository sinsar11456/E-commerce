import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User"
import "./pageRoutes.css"

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
        </Routes>
      </div>
    </>
  )
}
   