import { Route, Routes } from "react-router-dom";
import "./app.css";
import  PageRoutes  from "../src/PageRoutes";
import Login from "./pages/login/Login";

function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.isAdmin

  return (
    <Routes>
    {admin &&(
      <>
        <Route path="/*" element={<PageRoutes />} />
      </>)}
        <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
