import React from 'react'
import { Container } from 'react-bootstrap'

export const Info = () => {
    return (
      <Container>
        <div
          className="section"
          style={{ width: ""}}>
          <div className="image-infoe-layout row flex-lg-row align-items-center justify-content-between g-5">
            <div className="info-image col-lg-6" style={{ padding: "0 0" }}>
              <img
                src="info/info.png"
                className="d-block mx-lg-auto "
                alt="Bootstrap Themes"
                width="565"
                loading="lazy"
              />
            </div>
            
            <div className="text-info-layout col-6">
              <h1 className="font-info mb-3">
                Chatss for your distributed teams
              </h1>
              <p className="desc-info">
                Team combines the immediacy of real-time chat with an email
                threading model. With Team, you can catch up on important
                conversations while ignoring irrelevant ones.
              </p>

              <div className="d-flex flex-row align-items-center mt-4 gap-2">
                <a href="">
                  <p
                    className="blue fw-medium"
                    style={{
                      textDecoration: "underline",
                    }}>
                    Learn More
                  </p>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none">
                  <path
                    d="M20.1482 13.7549H6.38574C5.69824 13.7549 5.13574 14.3174 5.13574 15.0049C5.13574 15.6924 5.69824 16.2549 6.38574 16.2549H20.1482V18.4924C20.1482 19.0549 20.8232 19.3299 21.2107 18.9299L24.6857 15.4424C24.9232 15.1924 24.9232 14.8049 24.6857 14.5549L21.2107 11.0674C20.8232 10.6674 20.1482 10.9549 20.1482 11.5049V13.7549V13.7549Z"
                    fill="#5468E7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
}
