# Interview Scheduler

Scheduler is a simple single-page application where students can schedule, edit and cancel appointments with tutors. It was created using the React view library.

## Final Product

!["Screenshot of View"](https://github.com/RicardoJBOF/scheduler/blob/master/docs/View.png)
!["Screenshot of Creating Appointment"](https://github.com/RicardoJBOF/scheduler/blob/master/docs/creating-appointment.png)
!["Screenshot of register Saving Appointment"](https://github.com/RicardoJBOF/scheduler/blob/master/docs/saving-appointment.png)

## Dependecies
- React
- Webpack
- Babel
- WebSockets
- Axios
- Storybook
- Webpack Dev Server
- Jest
- Cypress
- Scheduler-api as database (https://github.com/RicardoJBOF/scheduler-api)

## Getting Started

### Setup
Install dependencies with `npm install`.

### Running Webpack Development Server
Run `npm start`.

### Running Jest Test Framework
Run `npm test`.

### Running Storybook Visual Testbed
Run `npm run storybook`.


## Requirements

### Functional Requirements
- Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest tests are used through the development of the project.

### Behavioural Requirements
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.








