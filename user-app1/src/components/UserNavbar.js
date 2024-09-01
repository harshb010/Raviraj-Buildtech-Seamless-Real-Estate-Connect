import React from "react";
import { Link } from "react-router-dom";

export default function UserNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/admin/dashboard">
          User
        </Link>
        <a href='/userlogin'>Logout</a>
      </div>
    </nav>
  );
}
