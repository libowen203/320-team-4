import React, {Component} from 'react';

class JobPosting extends Component{
	render() {
        return (
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
        );
    }
}

export default JobPosting;