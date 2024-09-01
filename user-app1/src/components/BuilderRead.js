import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import AdminNavbar from './AdminNavbar';

export default function Read() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]); // Ensure initial state is an array

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

  const getUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:8686/api/builders`);
      console.log(response.data);
      
      // Ensure the response is an array
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.error("API did not return an array.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRegister = () => {
    navigate('/create');
  };

  const handleLocalStorage = (id, name, companyName, contactInfo) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("companyName", companyName);
    localStorage.setItem("contactInfo", contactInfo);
  };

  useEffect(() => {
    getUsers();
  }, []);

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

        {/* Main Content */}
        <div className="container mt-3 mb-3">
          <h3>Builders</h3>
          <div className="row mt-3 mb-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Contact No.</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.userName}</td>
                      <td>{user.password}</td>
                      <td>
                        <Link to="/update">
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              handleLocalStorage(
                                user.id,
                                user.name,
                                user.userName,
                                user.password
                              )
                            }
                          >
                            Update
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">No builders found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ ...contentStyle, ...mediaQueryStyle.content }}>
          <div className="row mt-5 mb-3 p-3"></div>
        </div>
      </div>
    </div>
  );
}
