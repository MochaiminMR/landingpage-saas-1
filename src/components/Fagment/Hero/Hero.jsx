import React from 'react'
import { Header } from "../../Element/Header/Header";
import { CustomButton } from '../../Element/Button/Button';
import { Container, Row, Col } from "react-bootstrap";
import { Form } from '../../Element/Form/Form';

export const Hero = () => {
return (
  <div className="hero w-100 ">
    <Header></Header>

    <Container className="">
      <div className="hero-text-section layout">
        <h1 className="hero-text">Instant collaboration for remote teams</h1>
        <p className="desc-hero">
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </p>
        <div className="form d-flex flex-row mt-4 w-100">
          <div className="form-2">
            <Form />
          </div>
          <div className="button-layout">
            <CustomButton className="primary w-100">Get Access</CustomButton>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
}
