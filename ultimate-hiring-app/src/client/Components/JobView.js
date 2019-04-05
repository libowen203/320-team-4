import React, {Component} from 'react';
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";
class JobView extends Component {
  render() {
  	axios.get('http://localhost:3001/getData').then(function (response) {
	//handle success
  // Shows form data: console.log(response.data)
    console.log(response.data)
    this.state.jobs = response.data
	})
	.catch(function(error){
		//alert("Error retrieving job posting data")
	})
	.then(function(){
		//always executed, display here
	})
    return (
      <Container fluid>
        <Row>
          <Col sm="6" md={{size: 10, offset: 1}}>
            <Row>
              <Col> <JobPostingCard /> </Col>
              <Col> <JobPostingCard /> </Col>
              <Col> <JobPostingCard /> </Col>
            </Row>
            <br></br>
            <Row>
              <Col> <JobPostingCard /> </Col>
              <Col> <JobPostingCard /> </Col>
              <Col> <JobPostingCard /> </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default JobView;
