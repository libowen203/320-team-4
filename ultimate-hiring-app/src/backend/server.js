/* **
This server.js is based off of the tutorial at https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274
** */
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const JobPosting = require('../models/JobPostingJSON');
const Employee = require('../models/EmployeeJSON')

const app = express()
const router = express.Router()

const dbRoute = "mongodb://3.18.251.248/scrumgang_server"
const API_PORT = 3001

app.use(cors()) //makes app work with cors
app.use(bodyParser()) //parses json data for us

// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection

db.once("open", () => console.log("connected"))

// this is our create methid
// this method adds new data in our database
app.post("/putData", (req, res) => {
  job = new JobPosting() //based on Mongoose schema
  //TODO: Fill in the rest of the fields here before saving object
  job.title = req.body.jobTitle
  job.description = req.body.jobDescription
  job.managerID = req.body.managerID
  job.postedDate = req.body.postingDate

  console.log(job.title)
  job.save(err => { //sends object to database
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.get("/getData",(req, res) => {
  JobPosting.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  })});

app.post("/addEmployee", (req, res) => {
  employee = new Employee()

  employee.firstName = req.body.firstName
  employee.lastName = req.body.lastName
  employee.email = req.body.email
  employee.companyId = req.body.companyId
  employee.companyName = req.body.companyName
  employee.positionTitle = req.body.positionTitle
  employee.startDate = req.body.startDate

  console.log(employee.firstName)
  employee.save(err => { //sends object to database
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
    });
  });

app.get("/getEmployee", (req, res) => {
  Employee.find({companyId: 1}, null, {sort: 'managerId'}, (err, data) => {
    if (err){
      console.log(err)
      return res.json({ success: false, error: err });
    }
    return res.json({ success: true, data: data });
  })});

app.get("/orgChart/", (req, res) => {
  id = req.params.managerId
  if(!id){
    Employee.find({companyId: 1, managerId: {$exists: false}}, (err, data) => {
      if (err){
        console.log(err)
        return res.json({ success: false, error: err });
      }
      return res.json({ success: true, data: data });
    })}
  else{
    Employee.find({companyId: 1, managerId: id}, (err, data) => {
      if (err){
        console.log(err)
        return res.json({ success: false, error: err });
      }
      return res.json({ success: true, data: data });
    })}
  })



app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
