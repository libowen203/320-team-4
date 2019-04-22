import React, {Component} from 'react';
import axios from 'axios'



class EditJobPostingPopup extends Component{
  constructor(props){
      super(props);
      this.state = {
        job: this.props.job,  
        jobTitle: this.props.job.title,
        jobDescription: this.props.job.description,
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.togglePopup = this.togglePopup.bind(this);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

//Method to toggle popup window..
  togglePopup() {
    console.log("TOGGLE")
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleTitleChange(event)  {
this.setState({jobTitle: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({jobDescription: event.target.value})
      }

//Method for action after hitting the submit button
    handleSubmit = (event) => {
        event.preventDefault();  
        axios.post('http://localhost:3001/updateData', this.state);
        this.props.closePopup();
      }


  render(){

      return(
        //Form elements with labels and inputs for job title and job description
        <div>
      return (
      <div className='popup'>
        <div className='popup_inner'>
        <form name="postingInfo" onSubmit={this.handleSubmit} id="editable-posting-form">
          <div className="header">Edit Job</div>
            <div className="form-group" >
             <h6>{this.props.title}</h6>
             <input type="text" value ={this.state.jobTitle} onChange={this.handleTitleChange}></input>
             <h6>{this.props.jobDescription}</h6>
             <input type="text"   value ={this.state.jobDescription} onChange={this.handleDescriptionChange}></input>
            <br></br>
            <input type = "submit" name="submitButton"></input>
              <button id ="closeButton" onClick={this.props.closePopup}>Close</button>
            </div>
          </form>
        </div>
      </div>
    );
    </div>

  );
  }




}

class Popup extends React.Component {

  render() {

    return (
      <div className='popup'>
        <div className='popup_inner'>
        <h1>Posting Preview</h1>
          <h2>{this.props.jobTitle}</h2>
          <h4><b>First Name: </b> {this.props.fname}</h4>
          <h4><b>Last Name: </b>{this.props.lname}</h4>
          <button id ="closeButton" onClick={this.props.closePopup}>Done</button>
        </div>
      </div>
    );
  }
}




export default EditJobPostingPopup;
