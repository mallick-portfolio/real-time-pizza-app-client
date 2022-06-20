import "./App.css";
import Navbar from "./Components/pages/Shared/Navbar.jsx";
import AllRoutes from "./Components/routes/AllRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
