import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
export default function Login() {
  const { loginin, verifyUser } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Enter email and password');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password should be 8 characters and include at least one special character, one alphabet, and one number');
      return;
    }

    axios.post("http://localhost:8686/auth/builderlogin", { email, password })
      .then(result => {
        navigate('/builderdashboard')
        const token = result.data.jwt;
        sessionStorage.setItem('authToken', token);
        axios.get(`http://localhost:8686/auth/getbuilderbyjwt`, { headers: { Authorization: `Bearer ${token}` }})
          .then(userResult => {
            const userRole = userResult.data.role;
            console.log(userRole);
              navigate('/builderdashboard');
           
          })
          .catch(userError => {
            
            console.log(userError);
            setError('Failed to fetch user role. Please try again later.');
          });
      })
      .catch(error => {
        console.log(error.response);
        if (error.response.status === 404) {
          setError('Invalid email or password');
          alert('Invalid Email or Password');
        } else {
          setError('An unexpected error occurred. Please try again later.');
          alert('Invalid Email or Password');
        }
      });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row justify-content-center align-items-center loginContainer ">
          <div className="col-lg-4 col-md-6">
            <form className="login-form" onSubmit={handleSubmit}>
              <h2 className="text-center">Builder</h2>
              <div className="form-group">
                <label htmlFor="username">Username</label>  
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
             
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              <div className="form-group text-center">
                <p>
                  Don't have an account?{' '}
                  <Link to={"/builderregister"} className="register-link">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
