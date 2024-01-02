import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

export const Foot = () => {
  return (
    <div className="footer mt-5 px-5">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
        <div className="col sm-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img src="navbar/Logo.svg" alt="tim-logo" />
          </a>
          <p  className='text-white'>Collaboration platform for mordern team</p>
        </div>
        <div className="col md-3">
          <h5 className="text">Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Product
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="col md-3">
          <h5 className="text">Features</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Screen Sharing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                IOS & Android Apps
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                File Sharing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                User Managment
              </a>
            </li>
          </ul>
        </div>
        <div className="col md-3">
          <h5 className="text">Contact Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                info@teamapp.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                1-800-200-300
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                1010 Sunset Blv. Palo Alto, California
              </a>
            </li>
          </ul>
        </div>
        <div className="col md-3">
          <h5 className="text">Stay up to date</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Subscribe to our newseller
              </a>
            </li>
          </ul>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control white-placeholder"
              placeholder="Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <i
                className="fas fa-arrow-right"
                style={{ color: "#F5F5F53D" }}></i>
            </span>
          </div>
        </div>
      </footer>
      <div className="d-flex flex-column flex-sm-row justify-content-between text-white">
        <p>© Copyright Team Inc.</p>
      </div>
    </div>
  );
}
