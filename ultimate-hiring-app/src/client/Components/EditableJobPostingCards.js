import React, {Component} from 'react';
import axios from 'axios/index'
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ManageableJobPostingCard from "./ManageableJobPostingCard";


class EditableJobPostingCards extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      jobsList: this.props.jobs,
      currentPage: 1,
      jobsPerPage: 6
    };
    this.handleClick = this.handleClick.bind(this);
  }

  //Handle clicks when navigation buttons are pressed
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  render() {
    const { jobsList: jobs, currentPage, jobsPerPage } = this.state;

    // Logic for displaying current jobPostings
    const indexOfLastJobPosting = currentPage * jobsPerPage;
    const indexOfFirstJobPosting = indexOfLastJobPosting - jobsPerPage;
    const currentJobPosting = jobs.slice(indexOfFirstJobPosting, indexOfLastJobPosting);

  

    //Logic for displaying 6 cards per page
    let JobPostingCardArray = currentJobPosting.map(function (object, index) {
      console.log(index);
if(index %6===0){
  console.log("Using " + index);
  return (
      <div>
    <Row>
          <Col sm="6" md={{size: 10, offset: 1}}>
            <Row>
              <Col> <ManageableJobPostingCard key={index} id = {jobs[(currentPage -1)*6 + index%6]._id} title ={jobs[(currentPage -1)*6 + index%6].title} location ={jobs[(currentPage -1)*6 + index%6].location} description= {jobs[(currentPage -1)*6 + index%6].description}/> </Col>
              <Col> <ManageableJobPostingCard key={index+1} id = {jobs[(currentPage -1)*6 + (index + 1)%6]._id} invisible={(currentPage - 1) * 6 + (index + 1) % 6 >= jobs.length} title ={(currentPage -1)*6 + (index+1)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+1)%6].title : ""} location ={(currentPage -1)*6 + (index+1)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+1)%6].location : ""} description= {(currentPage -1)*6 + (index+1)%6 < jobs.length ?jobs[(currentPage -1)*6 + (index+1)%6].description : ""}/> </Col>
              <Col> <ManageableJobPostingCard key={index+2} id = {jobs[(currentPage -1)*6 + (index + 2)%6]._id} invisible={(currentPage - 1) * 6 + (index + 2) % 6 >= jobs.length} title ={(currentPage -1)*6 + (index+2)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+2)%6].title : ""} location ={(currentPage -1)*6 + (index+2)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+2)%6].location : ""} description= {(currentPage -1)*6 + (index+2)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+2)%6].description : ""}/> </Col>
            </Row>
            <br></br>
            <Row>
            <Col> <ManageableJobPostingCard key={index+3} id = {jobs[(currentPage -1)*6 + (index + 3)%6]._id} invisible={(currentPage - 1) * 6 + (index + 3) % 6 >= jobs.length} title ={(currentPage -1)*6 + (index+3)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+3)%6].title : ""} location ={(currentPage -1)*6 + (index+3)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+3)%6].location : ""} description= {(currentPage -1)*6 + (index+3)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+3)%6].description : ""}/> </Col>
            <Col> <ManageableJobPostingCard  key={index+4}id = {jobs[(currentPage -1)*6 + (index + 4)%6]._id} invisible={(currentPage - 1) * 6 + (index + 4) % 6 >= jobs.length} title ={(currentPage -1)*6 + (index+4)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+4)%6].title : ""} location ={(currentPage -1)*6 + (index+4)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+4)%6].location : ""} description= {(currentPage -1)*6 + (index+4)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+4)%6].description : ""}/> </Col>
            <Col> <ManageableJobPostingCard key={index+5} id = {jobs[(currentPage -1)*6 + (index + 5)%6]._id} invisible={(currentPage - 1) * 6 + (index + 5) % 6 >= jobs.length} title ={(currentPage -1)*6 + (index+5)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+5)%6].title : ""} location ={(currentPage -1)*6 + (index+5)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+5)%6].location : ""} description= {(currentPage -1)*6 + (index+5)%6 < jobs.length ? jobs[(currentPage -1)*6 + (index+5)%6].description : ""}/> </Col>

            </Row>
          </Col>
        </Row>
</div>)
 } 



  })
    

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(jobs.length / jobsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <Container fluid>
        {JobPostingCardArray}
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
        </Container>

    );
  }
}




export default EditableJobPostingCards;


