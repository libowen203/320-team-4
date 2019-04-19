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
                    children:[
                      {
                        name: 'Level 3: A',
                        attributes:{
                          keyA: 'A'
                        },
                        children:[
                          {
                            name: 'Level 4: A',
                            attributes:{
                              keyA: 'A'
                            },
                            children:[
                              {
                                name: 'Level 5: A',
                                attributes:{
                                  keyA: 'A'
                                }
                              },
                              {
                                name: 'Level 5: B',
                                attributes:{
                                  keyA: 'A'
                                }
                              }
                            ]
                          },
                          {
                            name: 'Level 4: B',
                            attributes:{
                              keyA: 'A'
                            },
                            children: [
                              {
                                name: 'Level 5: C',
                                attributes:{
                                  keyA: 'A'
                                },
                              }
                            ]
                          }
                        ]
                      },
                      {
                        name: 'Level 3: B',
                        attrubutes:{
                          keyA: 'A'
                        },
                        children: [
                          {
                            name: 'Level 4: C',
                            attributes:{
                              keyA: 'A'
                            },
                            children:[
                              {
                                name: 'Level 5: D',
                                attributes:{
                                  keyA: 'A'
                                }
                              }
                            ]
                          },
                          {
                            name: 'Level 4 : D',
                            attributes:{
                              keyA: 'A'
                            },
                            children:[
                              {
                                name: 'Level 5: E',
                                attribute:{
                                  keyA: 'A'
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                },
                {
                    name: 'Level 2: B',
                    attributes:{
                      keyA: 'val A',
                      keyB: 'val B',
                      keyC: 'val C',},
                    children:[
                      {
                        name: 'Level 3: C',
                        attributes:{
                          keyA: 'A'
                        }
                      }
                    ]
                },
            ],
        },
];

class OrgChart extends Component {

    state = {
      employees: null
    }

    togglePopup() {
        console.log("TOGGLE")
        this.setState({
            showPopup: !this.state.showPopup,
            employees: []
        });
    }

    componentDidMount(){ //when component is created, gets employees
  		this.getEmployees();
  	}

    getEmployees = async () => { //when called, runs in background to load employee data
      console.log("GETTING")
      //TODO: route to /orgChart, make /orgChart build a tree in server.js
  		let res = await axios.get('http://localhost:3001/getEmployee');
      console.log("RES")
  		let {data} = await res.data;
  		console.log(data);
      console.log("DONe")
  		this.setState({employees: data})
  	};

    render() {
      if (this.state.employees) {
        let employees = []
        this.state.employees.forEach(function(element){
          employees.push(element) //push employees from state to array
          //TODO: make employee node class where each employee has other employees below them
          //employees should be populated from their previous nodes, not necessarily in an array
          //can be formatted to the style of const chart above
        })

        return (
            //React graph to build org chart
            <div>
                    <div className='popup'>
                        <div className='popup_inner'>
                            <div id="treeWrapper" syle={{width: '20cm', height: '20cm'}}>
                                <Tree data={chart, this.state.employees}/>
                            </div>
                            <button id ="closeButton" onClick={this.props.closePopup}>Close</button>
                        </div>
                    </div>
            </div>

        );}
      else{ //calls when there are no employees
        return (<div>
        <h1> Loading </h1>
        </div>)
      }
    }
}

export default OrgChart;
