import React, {Component} from 'react';
import axios from 'axios'
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";

//Hardcoded data (Should be replaced by data from backend)
let jobs = [
  {title:'Title 1',
location:'Location 1',
description:'Description 1'},
{title:'Title 2',
location:'Location 2',
description:'Description 2'},
{title:'Title 3',
location:'Location 3',
description:'Description 3'},
{title:'Title 4',
location:'Location 4',
description:'Description 4'},
{title:'Title 5',
location:'Location 5',
description:'Description 5'},
{title:'Title 6',
location:'Location 6',
description:'Description 6'},
{title:'Title 7',
location:'Location 7',
description:'Description 7'},
{title:'Title 8',
location:'Location 8',
description:'Description 8'},
{title:'Title 9',
location:'Location 9',
description:'Description 9'},
{title:'Title 10',
location:'Location 10',
description:'Description 10'},
{title:'Title 11',
location:'Location 11',
description:'Description 11'},
{title:'Title 12',
location:'Location 12',
description:'Description 12'}
]




class CurrentJobPostingCards extends Component {
  constructor() {
    super();
    this.state = {
      jobsList: jobs,
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
    const JobPostingCardArray = currentJobPosting.map(function (object, index) {
if(index %6===0){
 
  return (<div>
    <Row>
          <Col sm="6" md={{size: 10, offset: 1}}>
            <Row>
              <Col> <JobPostingCard title ={jobs[(currentPage -1)*6 + index%6].title} location ={jobs[(currentPage -1)*6 + index%6].location} description= {jobs[(currentPage -1)*6 + index%6].description}/> </Col>
              <Col> <JobPostingCard title ={jobs[(currentPage -1)*6 + (index+1)%6].title} location ={jobs[(currentPage -1)*6 + (index+1)%6].location} description= {jobs[(currentPage -1)*6 + (index+1)%6].description}/> </Col>
              <Col> <JobPostingCard title ={jobs[(currentPage -1)*6 + (index+2)%6].title} location ={jobs[(currentPage -1)*6 + (index+2)%6].location} description= {jobs[(currentPage -1)*6 + (index+2)%6].description}/> </Col>
            </Row>
            <br></br>
            <Row>
            <Col> <JobPostingCard title ={jobs[(currentPage -1)*6 + (index+3)%6].title} location ={jobs[(currentPage -1)*6 + (index+3)%6].location} description= {jobs[(currentPage -1)*6 + (index+3)%6].description}/> </Col>
            <Col> <JobPostingCard title ={jobs[(currentPage -1)*6 + (index+4)%6].title} location ={jobs[(currentPage -1)*6 + (index+4)%6].location} description= {jobs[(currentPage -1)*6 + (index+4)%6].description}/> </Col>            
            <Col> <JobPostingCard title ={jobs[(currentPage -1)*6 + (index+5)%6].title} location ={jobs[(currentPage -1)*6 + (index+5)%6].location} description= {jobs[(currentPage -1)*6 + (index+5)%6].description}/> </Col>            

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




export default CurrentJobPostingCards;


