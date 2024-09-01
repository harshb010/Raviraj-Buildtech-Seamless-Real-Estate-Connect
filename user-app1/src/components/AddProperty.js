import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BuilderNavbar from './BuilderNavbar';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Define handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const propertyData = {
      name,
      city,
      price,
      rooms,
      address,
      image,
      description,
    };

    try {
      // Adding some logging to verify data being sent
      console.log('Sending request with data:', propertyData);
      
      const response = await axios.post('http://localhost:8686/api/properties/register', propertyData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Registration successful:', response.data);
      
      // Redirect after successful registration
      navigate('/builderdashboard'); // Replace '/builderdashboard' with your desired route
    } catch (err) {
      console.error('Registration failed:', err.response ? err.response.data : err.message);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <BuilderNavbar />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form className="registration-form" onSubmit={handleSubmit}>
              <h2 className="mb-4">Add Property</h2>
           
              <div className="form-group">
                <label htmlFor="name">Building Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Building name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="rooms">Rooms</label>
                <input
                  type="text"
                  className="form-control"
                  id="rooms"
                  placeholder="Enter rooms"
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="image">Add Image</label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  placeholder="Enter image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Enter description here"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              
              <button type="submit" className="btn btn-primary btn-block">Add</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
