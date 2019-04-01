import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";
import OrgChartCard from "./OrgChartCard";
import CompInfoCard from "./CompInfoCard";
import ManPostingsCard from "./ManPostingsCard";
import JobPostingPopup from './JobPostingPopup';

class ManagerDash extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div class="container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="row">
          <div class="col-sm">
            <JobPostingCard />
          </div>
          <div class="col-sm">
            <OrgChartCard />
          </div>
          <div class="col-sm">
            <ManPostingsCard />
          </div>
          <div class="col-sm">
            <CompInfoCard />
          </div>
        </div> 
      </div>
    )

  }
}

export default ManagerDash;
