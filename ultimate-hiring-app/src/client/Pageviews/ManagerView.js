import React, {Component} from 'react';
import JobPosting from '../Components/JobPosting';
import ManagerDash from '../Components/ManagerDash';
import LogOutButton from '../Components/LogOutButton';

class ManagerView extends Component{
    render(){
       return (
       <div>
           {/* <header>
               <LogOutButton/>
           </header> */}
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

export default ManagerView;
