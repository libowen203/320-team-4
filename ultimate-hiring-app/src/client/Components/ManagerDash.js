import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";



class ManagerDash extends Component {
  constructor() {
    super();
  }

  render () {
    return (

      <Container fluid style ={{ lineHeight: '32px' }}>
        <Row debug>
          <Col debug><JobPostingCard /></Col>
          <Col debug><JobPostingCard /></Col>
        </Row>

      </Container>


    )

  }
}

export default ManagerDash;
