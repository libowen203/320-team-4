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
        //let form = document.forms.postingInfo;
        console.log(this.state.jobTitle);
        console.log(this.state.job._id);
        axios.post('http://localhost:3001/updateData', this.state);
        //console.log(this.state.jobDescription);

        //format data according to data dump
        //NOTE: data dump doesn't include posting ID. I'm wondering if we need it or if we'll always query by manager id and position title
        //for example, an employee wouldn't apply for a posting. They'd apply to a title. Then positions would be filled as they're filled
        /*this.setState({
          jobTitle: form.title.value,
          jobDescription: form.description.value,
      },() => { //callback param ensures that setstate occurs before post
        //push data via backend
        console.log('POST')
        axios.post('http://localhost:3001/postData', this.state)
        this.props.closePopup()
      });*/
      //document.getElementById("posting-form").reset();

      }


  render(){

      return(
        //Form elements with labels and inputs for job title and job description
        <div>
      return (
      <div className='popup'>
        <div className='popup_inner'>
        <form name="postingInfo" onSubmit={this.handleSubmit} id="posting-form">
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
