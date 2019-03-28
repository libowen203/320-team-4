import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class ManPostingsCard extends Component {
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
            <CardTitle> Manage Job Postings Card </CardTitle>
            <CardBody> Card Body: Text about card goes here </CardBody>
            <Button class="btn"> Button </Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default ManPostingsCard;
