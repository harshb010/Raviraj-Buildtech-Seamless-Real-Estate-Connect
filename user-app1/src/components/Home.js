import React from 'react'
import { Link } from "react-router-dom";
import Header from './Header';
export default function Home() {
  return (
    <>
    <Header/>
       <div id="mycarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner carousel">
              <div class="carousel-item active">
                <img src={require('./images/carousel-1.jpg')} class="d-block w-100" alt="Watch1"/>
                <div class="carousel-caption d-none d-md-block ">
                    <h1>CREATING<br></br> RELATIONSHIP<br></br> CAPITAL</h1>
                    <p><button class="button">ONE STEP SOLUTION</button></p>
                  </div>
              </div> 
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>

          <section id="about">
          <div class="container">
            <div class="row ">
              <h1 class="heading">
                real estate consultant in nashik
               </h1>
               
              <div class="col-6">
                <h2 class=" p">ABOUT RAVIRAJ BUILDTECH</h2><br></br>
                <p>Real Estate Consultant In Nashik with 30 years of experience and as completely “Client-Centric”, assist, analyse and adopt a strategic approach to arrive at an ideal solution befitting our client’s purpose and interest, backed by professional assistance and personalised services.<br></br><br></br>

                  With our values and principles, we are better placed and poised to secure and protect our client’s interest and purpose.<br></br><br></br>
                  
                  We strive to bring a refreshing and reassuring experience to create a lasting impression and relationship.<br></br><br></br>
                  
                  We serve reputed private developers and their ready developments in & around Nashik City, Maharashtra, India.</p>
              </div>
              <div class="col-6">
                <img src={require('./images/imgage1.png')} alt="image" class="column"/>
              </div>
            </div>
          </div>
          </section>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <img src={require('./images/image2.jpg')} alt="" class="image2"/>
              </div>
              <div class="col-6">
                <h1 class="para">NASHIK REAL ESTATE DESTINATION</h1><br></br><br></br>
                <p>Raviraj Buildtech is a real estate development company in Nashik known for its customer-centric approach and commitment to quality. They have a few notable projects in Nashik, including Raviraj Pushkar CHSL and Raviraj Vakratund Heights.<br></br><br></br>

                  Raviraj Buildtech emphasizes delivering high-quality homes and ensuring customer satisfaction. They aim to provide good value for money and strive to build a positive reputation in Nashik's real estate sector.​<br></br><br></br>
                  
                  The connectivity to makes commuting a reliable, comfortable & time-saving life support system.<br></br><br></br>
                  
                  The well-diversified social-economic fiber of society and facilities makes everyone from modest to global citizens, feel comfortable and cherish to work & live per their standard of life. Gurgaon with its world-class medical facilities is already an attraction to Global healthcare seekers and is on its way to being a Global Health Care destination.<br></br><br></br>
                  
                  All this brings good reasons, perfect sense and confidence to choose Gurugram, a preferred destination for both living and making a living.
                  
                  </p>
              </div>
            </div>
          </div>
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <img src={require('./images/image3.jpg')} alt="" class="image"/>
                </div>
                <div class="col-4">
                  <img src={require('./images/image4.jpg')} alt="" class="image"/>
                </div>
                <div class="col-4">
                  <img src={require('./images/image5.jpg')} alt="" class="image"/>
                </div>
              </div>
            </div>
      <section id="services">
            <div class="services container">
              <h2>our services</h2>
              <div class="serve row">
                <div class="col-3">
                  <img src={require('./images/Icon1.png')} alt=""/><br></br><br></br>
                  <h4>residencial real estate</h4>
                </div>
                <div class="col-3">
                  <img src={require('./images/Icon2.png')} alt=""/><br></br><br></br>
                  <h4>residencial localities</h4>
                </div>
                <div class="col-3">
                  <img src={require('./images/Icon3.png')} alt=""/><br></br><br></br>
                  <h4>commercial real estate</h4>
                </div>
                <div class="col-3">
                  <img src={require('./images/Icon4.jpg')} alt=""/><br></br><br></br>
                  <h4>personalised services</h4>
                </div>
              </div>
            </div>
            </section>
            <div class="client container">
              <h1>TESTIMONIAL​S</h1>
                <h4>OUR CLIENTS SAY ABOUT
                RAVIRAJ BUILDTECH</h4>

                <p class="client">"Raviraj Buildtech exceeded our expectations with their attention to detail and superior craftsmanship.<br></br> Our home was built with the highest standards, and we couldn't be happier with the final result."</p>
                <p>The team at Raviraj Buildtech was incredibly responsive and attentive throughout the entire process.<br></br>They listened to our needs and made sure every detail was perfect. Their customer service is outstanding!</p>
                <p>"From start to finish, Raviraj Buildtech demonstrated professionalism and efficiency.<br></br> They completed our project on time and within budget, making the entire experience stress-free."</p>
                <p>"Choosing Raviraj Buildtech was the best decision we made for our construction project.<br></br> Their dedication to quality, excellent customer service, and professional approach ensured our complete satisfaction."</p>
            </div>
    </>
  );
}
