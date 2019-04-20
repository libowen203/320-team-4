import axios from 'axios'
import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import EditJobPostingPopup from './EditJobPostingPopup';
const { MongoClient, ObjectId } = require('mongodb');


class ManageableJobPostingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
this.deleteJobPosting = this.deleteJobPosting.bind(this);
  }


  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

 

 
  deleteJobPosting() {
    axios.delete("http://localhost:3001/items/"+ this.props._id)
    .then(response => {
         this.setState({ users: response.data });
        console.log('deleteUser response', response, this.state);
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