import React, {Component} from 'react';
import ManagerDash from '../Components/ManagerDash';
import LogOutButton from '../Components/LogOutButton';
import EmployeeDash from "../Components/EmployeeDash";

class EmployeeView extends Component{
    render(){
        return (
            <div>
                <header>
                    <LogOutButton/>
                </header>
                <div className="Postings">
                    <EmployeeDash />
                    <br></br>
                    <br></br>
                </div>
            </div>
        );
    }
}

export default EmployeeView;
