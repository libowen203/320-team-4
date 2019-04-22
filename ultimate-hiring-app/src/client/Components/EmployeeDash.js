import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import OrgChartCard from "./OrgChartCard";
import CompInfoCard from "./CompInfoCard";
import ManPostingsCard from "./ManPostingsCard";

class EmployeeDash extends Component {

    render () {
        return (
            <Container fluid>
                <Row>
                    <Col sm="12" md={{size: 6, offset: 1}}>
                        <Row>
                            <Col> <OrgChartCard /> </Col>
                            <Col> <CompInfoCard /> </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col> <ManPostingsCard /> </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default EmployeeDash;
