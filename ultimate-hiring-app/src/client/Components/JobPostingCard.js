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
          <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle> Card Title goes here </CardTitle>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default JobPostingCard;
