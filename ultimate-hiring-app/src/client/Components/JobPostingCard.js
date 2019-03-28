import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class JobPostingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle> Job Posting Card </CardTitle>
            <CardBody> Card Body: Text about card goes here </CardBody>
            <Button class="btn"> Button </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default JobPostingCard;
