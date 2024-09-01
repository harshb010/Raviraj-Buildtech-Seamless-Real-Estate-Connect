import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
//import Navbar from "./Navbar";

function App() {
  return (
    <>
     
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
