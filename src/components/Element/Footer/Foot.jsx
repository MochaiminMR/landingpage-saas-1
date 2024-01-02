import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

export const Foot = () => {
  return (
    <div className="">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#232340" }}>
        {/* Grid container */}
        <Container className="footer">
          {/* Section: Links */}
          <section>
            {/* Grid row */}
            <Row>
              {/* Grid column */}
              <Col lg={3} md={6} mb-4 mb-md-0>
                <img className='pb-lg-3' src="navbar/Logo.svg" alt="" />

                <p>Collaboration platform for mordern team</p>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col lg={2} md={6} mb-4 mb-md-0>
                <h5 className="blue">Company</h5>

                <ul className="list-unstyled mb-0">
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      Product
                    </a>
                  </li>
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      Blog
                    </a>
                  </li>
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      Support
                    </a>
                  </li>
                </ul>
              </Col>
              {/* Grid column */}

              {/* Grid column */}
              <Col lg={2} md={6} mb-4 mb-md-0>
                <h5 className="blue">Features</h5>

                <ul className="list-unstyled ">
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      Screen Sharing
                    </a>
                  </li>
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      IOS & Android Apps
                    </a>
                  </li>
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      File Sharing
                    </a>
                  </li>
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      User Management
                    </a>
                  </li>
                </ul>
              </Col>
              {/* Grid column */}
              {/* Grid column */}
              <Col lg={2} md={6} mb-4 mb-md-0>
                <h5 className="blue">Contact Us</h5>

                <ul className="list-unstyled mb-0">
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      info@teamup.com
                    </a>
                  </li>
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      1-800-200-300
                    </a>
                  </li>
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="#!" className="footer-text">
                      1010 Sunset Blv. Palo Alto, California
                    </a>
                  </li>
                </ul>
              </Col>
              {/* Grid column */}
              {/* Grid column */}
              <Col lg={3} md={6} mb-4 mb-md-0>
                <h5 className="blue">Stay Uptodate</h5>

                <ul className="list-unstyled mb-0">
                  <li style={{ paddingBottom: '10px' }}>
                    <a href="" className="footer-text">
                      Subscribe to our newseller
                    </a>
                  </li>
                  <li>
                    <div className="d-flex justify-content-between">
                      <div className="input-group">
                        <input
                          placeholder="Email"
                          type="text"
                          className="form-control border-0 form-section white-placeholder"
                          id="username"
                          name="username"
                          style={{ background: "rgba(245, 245, 245, 0.24)" }}
                          required
                        />

                        <span
                          className="input-group-text text-white border-0"
                          style={{ background: "rgba(245, 245, 245, 0.24)" }}>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </Col>
              {/* Grid column */}

              {/* Add three more Grid columns with the same structure as above */}
            </Row>
            {/* Grid row */}
          </section>
          {/* Section: Links */}

          {/* Section: Social media */}
          <section className="mb-4 text-center">
            {/* Add social media buttons here */}
          </section>
          {/* Section: Social media */}

        </Container>
        <Container>

        {/* Copyright */}
        <div className="py-3" style={{ backgroundColor: "#232340" }}>
          © Copyright Team Inc.
        </div>
        {/* Copyright */}
        </Container>
        {/* Grid container */}
      </footer>
      {/* Footer */}
    </div>
  );
}
