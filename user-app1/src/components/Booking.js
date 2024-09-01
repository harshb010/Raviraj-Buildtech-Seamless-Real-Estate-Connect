import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



export default function BookRoom() {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    // Fetch room details by roomId
    axios.get(`http://localhost:7117/pg_api/room/get/${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        const roomData = response.data;
        console.log(roomData);
        
        // Fetch images for the room
        return axios.get(`http://localhost:7117/pg_api/image/getByRoom/${roomId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(imageResponse => {
          const imagesData = imageResponse.data;          
          const imageUrls = imagesData.map(image => `data:image/jpeg;base64,${image.imagedata}`);
          setRoom({ ...roomData, imageUrls });
          setLoading(false);
        });
      })
      .catch(error => {
        console.error("There was an error fetching the room details!", error);
        setLoading(false);
      });
  }, [roomId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!room) {
    return <p>No room  available.</p>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleBooking = () => {
    navigate(`/bookingdetails/${roomId}`, { state: { room } });
  };

  return (
    <div className="room-details-container">
      <h2>Room Details</h2>
      <div className="room-details-card">
        {room.imageUrls.length > 0 ? (
          <Slider {...sliderSettings}>
            {room.imageUrls.map((url, index) => (
              <div key={index}>
                <img
                  src={url}
                  alt={`Room ${room.roomNumber} - Image1 ${index + 1}`}
                  className="room-detail-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="no-image-placeholder">
            <p>No image available</p>
          </div>
        )}
        <h3>Room Number: {room.roomNumber}</h3>
        <p><strong>Area:</strong> {room.area}</p>
        <p><strong>Capacity:</strong> {room.capacity}</p>
        <p><strong>Floor:</strong> {room.floorNumber}</p>
        <p><strong>Type:</strong> {room.type}</p>
        <p><strong>Rent:</strong> ₹{room.rent} per month</p>
        <p><strong>Availability:</strong> {room.isAvailable ? 'Available' : 'Not Available'}</p>
        <h4>PG Details</h4>
        <p><strong>Name:</strong> {room.pgRef.pgName}</p>
        <p><strong>Owner:</strong> {room.pgRef.ownerName}</p>
        <p><strong>Contact:</strong> {room.pgRef.contactNo}</p>
        <p><strong>Address:</strong> {room.pgRef.address}</p>
        <button
          className="book-now-button"
          onClick={handleBooking}
          disabled={!room.available}
        >
          {room.available ? 'Book Now' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}