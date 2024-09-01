import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
export default function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setContact] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

   
   // const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }
    // if (!passwordPattern.test(password)) {
    //   setError('Invalid password format');
    //   return;
    // }

    // Prepare data to send to the API
    const userData = {
      firstName,
      lastName,
      email,
      address,
      phoneNumber,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8686/auth/userregister', userData);
      console.log('Registration successful:', response.data);
      setRegistrationSuccess(true);
      const token = response.data.jwt;
      sessionStorage.setItem('authToken', token);

      setTimeout(() => navigate("/userlogin"), 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error('Registration failed:', err.response ? err.response.data : err.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form className="registration-form" onSubmit={handleSubmit}>
              <h2 className="mb-4">User Registration</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              {registrationSuccess && <div className="alert alert-success">Registration successful. Redirecting to login...</div>}
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Register</button>
              <div className="text-center mt-3">
                <Link to={"/userlogin"} className="login-link">Already have an account? Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
