import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import JobPostingPopup from '../Components/JobPostingPopup';

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
            <CardHeader tag="h5"> {this.props.job.title}</CardHeader>
            <CardSubtitle> {this.props.job.companyName}</CardSubtitle>
            <CardBody>{this.props.job.description} </CardBody>
            <Button class="btn" onClick={this.togglePopup.bind(this)}> Apply </Button>
          </CardBody>
        </Card>
        {this.state.showPopup ?
          <JobPostingPopup
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
