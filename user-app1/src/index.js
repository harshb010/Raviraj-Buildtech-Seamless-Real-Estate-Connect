import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import AuthProvider from "./context/AuthContext";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import BuilderLogin from "./components/BuilderLogin";
import BuilderRegister from "./components/BuilderRegister";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Booking from "./components/Booking";
import AdminNavbar from "./components/AdminNavbar";
import Buy from "./components/Buy";
import Details from "./components/Details";
import Appointment from "./components/Appointment";
import UserNavbar from "./components/UserNavbar";
import BuilderNavbar from "./components/BuilderNavbar";
import AddProperty from "./components/AddProperty";
import BuilderRead from "./components/BuilderRead";

import BuilderDashboard from "./components/BuilderDashboard";
//import BuyerForm from "./components/BuyerForm";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="userlogin" element={<UserLogin/>}/>
          <Route path="userregister" element={<UserRegister/>}/>
          <Route path="adminlogin" element={<AdminLogin/>}/>
          <Route path="adminregister" element={<AdminRegister/>}/>
          <Route path="builderregister" element={<BuilderRegister/>}/>
          <Route path="builderlogin" element={<BuilderLogin/>}/>
          <Route path="admindashboard" element={<AdminDashboard/>}/>
          <Route path="userdashboard" element={<UserDashboard/>}/>
          <Route path="booking" element={<Booking/>}/>
          <Route path="adminnavbar" element={<AdminNavbar />}/>
          <Route path="usernavbar" element={<UserNavbar />}/>
          <Route path="buildernavbar" element={<BuilderNavbar />}/>
          <Route path="addproperty" element={<AddProperty />}/>
          <Route path="builderread" element={<BuilderRead />}/>
          <Route path="builderdashboard" element={<BuilderDashboard />}/>
        {/*  <Route path="home" element={<Home1/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="landlord" element={<Landlord />}/> 
          <Route path="seller" element={<Seller />}/>
          <Route path="rent" element={<Rent />}/> */}
          <Route path="buy" element={<Buy />}/>
          <Route path="detail" element={<Details />}/>
          <Route path="appointment" element={<Appointment />}/>
          {/* <Route path="buyerForm" element={<BuyerForm />}/>  */}
          <Route path="appointment" element={<Appointment />}/>
          {/* <Route path="buyerForm" element={<BuyerForm />}/> */ }
        </Route>
      </Routes>
   </AuthProvider>
  </BrowserRouter>
);