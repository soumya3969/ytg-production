import React from "react";
import { Container, Col, Row } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import Testimonials from "../components/Testimonial/Testimonials";
import "./../styles/about.css"; // Make sure to create and style this CSS file as needed

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <section className="introduction">
        <p>
          Welcome to <strong>Your Tour Guide</strong>, your premier travel
          agency for unforgettable adventures. With years of experience and a
          passion for travel, we are dedicated to bringing you the best travel
          experiences from around the world.
        </p>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make your travel dreams a reality. Whether you are
          seeking a relaxing beach vacation, an adventurous trek, or a cultural
          immersion, we are here to provide personalized travel experiences
          tailored to your preferences.
        </p>
      </section>
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <section>
            <Container>
              <Row>
                <Col lg="12">
                  <Testimonials />
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;
