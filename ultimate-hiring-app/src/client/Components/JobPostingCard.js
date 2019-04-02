import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import PostJobPopup from '../Components/PostJobPopup';

class JobPostingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };

  }


  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }


  render() {
    return (
      <div>
        <Card style={{width:"100%", height:"60%"}}>
          <CardBody className="text-center">
            <CardHeader tag="h5"> Job Title</CardHeader>
            <CardSubtitle> Job Location </CardSubtitle>
            <CardBody>Job Description </CardBody>
            <Button class="btn" onClick={this.togglePopup.bind(this)}> Apply </Button>
          </CardBody>
        </Card>
        {this.state.showPopup ?
          <PostJobPopup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    )
  }
}

export default JobPostingCard;
