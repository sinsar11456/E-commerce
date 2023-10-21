import { Route, Routes } from "react-router-dom";
import "./app.css";
import { PageRoutes } from "./PageRoutes";


function App() {
  return (
    <Routes >
    <>
      <Route path="/*" element={<PageRoutes/>} />
      </>
    </Routes>

  );
}
export default App;


