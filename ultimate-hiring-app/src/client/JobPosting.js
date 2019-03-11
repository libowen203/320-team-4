import React, {Component} from 'react';



class JobPosting extends Component{
  constructor(props){
      super(props);
      this.state = {
          postingID: '',
          managerID: '',
          jobTitle: '',
          jobDescription: '',
          companyID: '',
          postingDate: '',
      };
  }

//Methods that handle text input for each field
    handlePostingIDChange = (event) => {
        this.setState({postingID: event.target.value});
  }
    handleManagerIDChange = (event) => {
        this.setState({managerID: event.target.value});
    }
    handleJobTitleChange = (event) => {
        this.setState({jobTitle: event.target.value});
    }
    handleJobDescriptionChange = (event) => {
        this.setState({jobDescription: event.target.value});
    }
    handleCompanyIDChange = (event) => {
        this.setState({companyID: event.target.value});
    }
    handlePostingDateChange = (event) => {
        this.setState({postingDate: event.target.value});
    } 
//Method for action after hitting the submit button
    handleSubmit = (event) => {
        event.preventDefault();
        const {postingID, managerID, jobTitle, jobDescription, companyID, postingDate} = this.state
        //console.log(this.state.postingID);
        
        /*alert(`Your state values: \n 
                postingID: ${postingID} \n 
                managerID: ${managerID}\n
                jobTitle: ${jobTitle}\n
                jobDescription ${jobDescription}\n
                companyID ${companyID}\n
                postingID ${postingID}`)*/
      } 


  render(){
   
      return(
    //Form elements with labels and inputs for 6 attributes 
        <div>
            
    <form onSubmit={this.handleSubmit}>
    
      <div className="form-group">
        <label htmlFor="postingID">Posting ID</label>
        <input name="postingID" className="form-control" id="postingID" placeholder="Enter Posting ID" 
          value={this.state.postingID} 
          onChange={this.handlePostingIDChange} />
      </div>

      <div className="form-group">
        <label htmlFor="managerID">Manager ID</label>
        <input name="managerID" className="form-control" id="managerID" placeholder="Enter Manager ID" 
        // value and onChange prop
          value={this.state.managerID} 
          onChange={this.handleManagerIDChange} />
      </div>

      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input name="jobTitle" className="form-control" id="jobTitle" placeholder="Enter Job Title" 
        // value and onChange prop
          value={this.state.jobTitle} 
          onChange={this.handleJobTitleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="jobDescription">Job Description</label>
        <input name="jobDescription" className="form-control" id="jobDescription" placeholder="Enter Job Description" 
        // value and onChange prop
          value={this.state.jobDescription} 
          onChange={this.handleJobDescriptionChange} />
      </div>

      <div className="form-group">
        <label htmlFor="companyID">Company ID</label>
        <input name="companyID" className="form-control" id="companyID" placeholder="Company ID" 
        // value and onChange prop
          value={this.state.companyID} 
          onChange={this.handleCompanyIDChange} />
      </div>

      <div className="form-group">
        <label htmlFor="postingDate">Posting Date</label>
        <input name="postingDate" className="form-control" id="postingDate" placeholder="postingDate" 
        // value and onChange prop
          value={this.state.postingDate} 
          onChange={this.handlePostingDateChange} />
      </div>

      <button type="submit" className="btn btn-success btn-block">Submit</button>


    </form>
        

    <h6>Form Data Unstructured</h6>
      <div >{this.state.postingID}</div>
      <div >{this.state.managerID}</div>
      <div >{this.state.jobTitle}</div>
      <div >{this.state.jobDescription}</div>
      <div >{this.state.companyID}</div>
      <div >{this.state.postingDate}</div>
      <h6>Format Data as a JSON File</h6>
       <div><pre>{JSON.stringify(this.state, null, 2) }</pre></div>
    </div>
        
  );
  }




}


/*class JobPosting extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      
      handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(e) { //this is where the info is sent to when submt is hit
        alert( "The value is "  + this.JobPosting.form.label);
        console.log(this.JobPosting.form.label);
        //this.printOnScreen = this.printOnScreen.bind(this);
        e.preventDefault();
    }

    printOnScreen(object){
        //alert('dd');
    }


	render() {
        return (
            /*
            <table>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Software Engineer 2</td>
                        <td>Clover</td>
                    </tr>
                    <tr>
                        <td>Tech Lead</td>
                        <td>Clover</td>
                    </tr>
                    <tr>
                        <td>Senior Software Engineer</td>
                        <td>Crystal</td>
                    </tr>
                    <tr>
                        <td>Tech Lead</td>
                        <td>Crystal</td>
                    </tr>
                </tbody>
            </table>
            

            // testing putting up a form
            //start of the form
            <form onSubmit={this.handleSubmit}> 
                <label>
                    Posting_ID: 
		            <input type="text" ref={(input) => this.input = input} />
                </label>
                <br></br>
                <label>
                    Manager_ID: 
		            <input type="text" ref={(input) => this.input = input} />
                </label>
                <br></br>
                <label>
                    Job Title: 
                    <input type="text" ref={(input) => this.input = input} />
                </label>
                <br></br>
                <label>
                    Job Description:<br></br>
		            <textarea rows="5" cols="30"> </textarea>
                </label>
                <br></br>
                <label>
                    Company_ID: 
		            <input type="text" ref={(input) => this.input = input} />
                </label>
                <br></br>
                <label>
                    Posting Date: 
		            <input type="text" ref={(input) => this.input = input} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form> 

        );
    }
}
*/

export default JobPosting;