import React, {Component} from 'react';
import axios from 'axios'
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";
class JobView extends Component {
  render() {
  	axios.get('http://localhost:3001/getData').then(function (response) {
	//handle success
	// Shows form data: console.log(response.data)
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
        <Pagination aria-label="Page navigation example">
        <PaginationItem disabled>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </Container>
      
    );
  }
}
export default JobView;
