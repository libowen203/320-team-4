import React, {Component} from 'react';
import JobView from '../Components/JobView';
import Menu from '../Components/Menu';
import JobPosting from '../Components/JobPosting';
import ManagerDash from '../Components/ManagerDash';
class App extends Component {
    render() {
        return (
          <div class = "view">
          <header>
            <Menu />
          </header>
          <div className = "container">
            <JobView/>
          </div>
           <div className="Postings">
           <JobPosting />
           <ManagerDash />
           <br></br>
           <br></br>
           </div>
           </div>
        );
    }
}

export default App;