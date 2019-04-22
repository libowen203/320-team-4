import axios from 'axios'
import React, { Component } from 'react';
import { Card, CardHeader, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import EditJobPostingPopup from './EditJobPostingPopup';

//Card Components in the Manage Job Postings View
class ManageableJobPostingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      id: this.props.id
    };
this.deleteJobPosting = this.deleteJobPosting.bind(this);
  }


  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

 

 
  deleteJobPosting = (event) =>{
    event.preventDefault();
    console.log(this.state.id, this.props.job._id);
    this.setState({id: this.props.job._id}, () => {
      axios.post('http://localhost:3001/deleteJobPosting', this.state);
    });

}

  render() {
    return (
        <div style={this.props.invisible ? {opacity: 0} : {opacity: 100}}>
          <Card style={{width:"100%", height:"60%"}}>
            <CardBody className="text-center">
              <CardHeader tag="h5"> {this.props.title}</CardHeader>
              <CardSubtitle> {this.props.location} </CardSubtitle>
              <CardBody>{this.props.description} </CardBody>
              <Button class="btn" onClick={this.togglePopup.bind(this)}> Edit Job Posting </Button>
              <Button onClick={this.deleteJobPosting}>Delete</Button>
            </CardBody>
          </Card>
          {this.state.showPopup ?
              <EditJobPostingPopup
              job = {this.props.job}
              title = {this.props.title}
              description = {this.props.description}
                  closePopup={this.togglePopup.bind(this)}
              />
              : null
          }
        </div>

    )
  }
}

export default ManageableJobPostingCard;