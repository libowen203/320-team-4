import React, {Component} from 'react';
import axios from 'axios'
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";
import CurrentJobPostingCards from './CurrentJobPostingCards';

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
      //Renders current six cards from job postings array
<CurrentJobPostingCards />
      );
  }
}

export default JobView;



