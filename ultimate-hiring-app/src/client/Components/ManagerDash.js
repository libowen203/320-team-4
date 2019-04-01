import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";
import OrgChartCard from "./OrgChartCard";
import CompInfoCard from "./CompInfoCard";
import ManPostingsCard from "./ManPostingsCard";
import JobPostingPopup from './JobPostingPopup';
import RecentPostings from "./RecentPostings";

class ManagerDash extends Component {

  render () {
    return (
      <Container fluid>
        <Row>
          <Col xs="auto"><RecentPostings /></Col>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <Row>
              <Col> <OrgChartCard /> </Col>
              <Col> <CompInfoCard /> </Col>
            </Row>
            <br></br>
            <Row>
              <Col><ManPostingsCard /> </Col>
              <Col> <JobPostingCard /> </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )

  }
}

export default ManagerDash;
