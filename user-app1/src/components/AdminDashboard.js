import React from 'react';
import { Link } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
export default function AdminDashboard() {
  // Styles for the side menu and dashboard
  const containerStyle = {
    fontFamily: "sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f4f4f4",
    height: "100vh",
    display: "flex",
    width: "100%",
    flexDirection: "row",
  };

  const sidebarStyle = {
    backgroundColor: "#9a9aa6",
    width: "200px",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
  };

  const h3Style = {
    marginBottom: "20px",
    fontSize: "1.2rem",
    color: "#333",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
  };

  const liStyle = {
    marginBottom: "10px",
  };

  const aStyle = {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#333",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const aHoverStyle = {
    backgroundColor: "#eee",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    width: "calc(33.33% - 20px)",
  };

  const cardContentStyle = {
    marginBottom: "10px",
    fontSize: "1.5rem",
    color: "#333",
  };

  const dashboardStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  // Responsive styles
  const mediaQueryStyle = {
    '@media (max-width: 768px)': {
      container: {
        flexDirection: "column",
      },
      sidebar: {
        width: "100%",
        boxShadow: "none",
      },
      content: {
        marginTop: "20px",
      },
      card: {
        width: "100%",
      },
    },
  };

  return (
    <div>
    <AdminNavbar />
    <div style={{ ...containerStyle, ...mediaQueryStyle.container }}>
      {/* Sidebar Menu */}
      <div style={{ ...sidebarStyle, ...mediaQueryStyle.sidebar }}>
        
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a style={aStyle}>Dashboard</a>
          </li>
          <li style={liStyle}>
            <a href="/builderread" style={aStyle}>View All Builders</a>
          </li>
          <li style={liStyle}>
            <a href="transaction" style={aStyle}>Appointment</a>
          </li>
          <li style={liStyle}>
            <a href="/adminlogin" style={aStyle}>Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content and Dashboard */}
      <div style={{ ...contentStyle, ...mediaQueryStyle.content }}>
        <h1>Admin </h1>
        <div className="row mt-5 mb-3 p-3">
          
        </div>

       
      </div>
    </div>
    </div>
  );
}