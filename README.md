# 320-team-4
## Notes on getting started and contributing
- For first time setup you'll need to run 'npm install' in the project directory in order to get all of the app's dependencies.
- Make sure you pull from the repository before you make changes
- Comment your code well so others understand what you did
- Make detailed commit messages in the proper format we discussed
  - It's better to make several small commits (focus on one thing at a time and commit it rather than make all your changes and commit that)

## Running the backend
The backend must be run separately from the frontend. I created a very basic connector that will connect to a local instance of Mongo (more info below). In order to run the backend, go into 320-team-4-frontend/src/backend and use the command 

<code> node server.js </code> 

Before the backend can actually connect to Mongo, you'll have to set up your local instance of Mongo, which will be located outside of the repository since it's our database and it will ultimately be deployed on the cloud. I recommend just creating a docker instance of Mongo and then using docker-compose up to run it. 
