import LoginPanel from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import RegisterPanel from "./components/Register/Register";
import Dealers from "./components/Dealers/Dealers";
//import Dealer from "./components/Dealers/Dealer";
//import PostReview from "./components/Dealers/PostReview";
//import SearchCars from "./components/Dealers/SearchCars";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/dealers" element={<Dealers />} />
    </Routes>
  );
}
export default App;