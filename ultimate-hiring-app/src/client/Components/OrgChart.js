import React, { Component } from 'react';
import axios from 'axios'
import Tree from 'react-d3-tree';

//must install react-d3-tree: "npm install react-d3-tree"
const chart=[
        {
            name: 'Top Level',
            attributes:{
                keyA: 'val A',
            },
            children:[
                {
                    name: 'Level 2: A',
                    attributes:{
                        keyA: 'val A',
                        keyB: 'val B',
                        keyC: 'val C',
                    },
                },
                {
                    name: 'Level 2: B',
                },
            ],
        },
];

class OrgChart extends Component {

    

    togglePopup() {
        console.log("TOGGLE")
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {

        return (
            //React graph to build org chart
            <div>
                return (
                    <div className='popup'>
                        <div className='popup_inner'>
                            <div id="treeWrapper" syle={{width: '20cm', height: '20cm'}}>
                                <Tree data={chart}/>
                            </div>
                            <button id ="closeButton" onClick={this.props.closePopup}>Close</button>
                        </div>
                    </div>
                 );
            </div>

        );
    }
}

export default OrgChart;