import React, {Component} from 'react';

class JobPosting extends Component{

    handleSubmit(e) { //this is where the info is sent to when submt is hit
        alert( "The value is "  + this.input.value);
        e.preventDefault();
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
            */

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

export default JobPosting;