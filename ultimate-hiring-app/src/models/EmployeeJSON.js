var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({ //defines database schema to store objects
  "firstName": String,
  "lastName": String,
  "employeeId": Number,
  "email": String,
  "companyId": Number,
  "companyName": String,
  "positionTitle": String,
  "startDate": Date
},{ collection: 'Employee' });

module.exports = mongoose.model('Employee', employeeSchema)
