import React, {Component} from 'react';
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';
import JobPostingCard from "./JobPostingCard";
class JobView extends Component {

  state = {
    jobs: []
  }

  componentDidMount(){
    this.getJobs();
  }

  getJobs = async () => {
    let res = await axios.get('http://localhost:3001/getData');
    let {data} = await res.data;
    this.setState({jobs: data})
  };

  render() {
    return (
      <Container fluid>
        <React.Fragment>
          {this.state.jobs.map(job =>{
            console.log("HELLO")
            return (<JobPostingCard job={job}/>)
          })}
        </React.Fragment>            
      </Container>
    )
  }
}
export default JobView;
