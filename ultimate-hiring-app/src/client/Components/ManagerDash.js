import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";


class ManagerDash extends Component {
  constructor() {
    super();
  }

  render () {
    return (

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <JobPostingCard />
          </div>
          <div class="col-sm">
            <JobPostingCard />
          </div>
          <div class="col-sm">
            <JobPostingCard />
          </div>
        </div>

      </div>
    )

  }
}

export default ManagerDash;
