import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Student from './StudentDetails/Student';

class App extends Component {
    // this below Code is only for  Class Based React Apps.
    state = {
        students: [
            { name: "Amareesh D", age: "29", rollNo: "501" },
            { name: "Bhavan B", age: "28", rollNo: "509" },
            { name: "Bobby B", age: "28", rollNo: "519" }
        ],
        otherState: 'Lets Wait for our State'
    };
    switchStudentHandler = () => {
        // console.log('Button Switch Student was Clicked');
        // this.state.students[0].name ='Bobby Battula'; Never ever use this directly to set a 'state' property instead use setState() 
        this.setState( {
            students: [
                { name: "Amareesh Devabakthuni", age: "29", rollNo: "09JC1A0501" },
                { name: "Bhavan Bayaneni", age: "28", rollNo: "09JC1A0509" },
                { name: "Bobby Battula", age: "28", rollNo: "09JC1A0519" }
            ]
        }) // this updates the current state of the APP.
    };
    render() {
        return ( <div className = "App" >
            <p> <h4>Editing React APP Version: { React.version } </h4> 
            Our React is compatible of runninf JSX </p> 
            <button onClick = { this.switchStudentHandler } > <b> Switch Student </b></button> 
            {/* <Student name= "Amareesh D" age = "29" rollNo ="501">Cricket, FootBall, Gamblin</Student>
                      <Student name= "Bhavan B" age = "28" rollNo ="509"/>
                      <Student name="Bobby B" age="28" rollNo ="519">RoadTrips, Cooking, Gardenning, Sports, Movies, Books</Student> */
            } 
            { /* Name,age,rollNo are Properties of Student have to be defined in Student Component initally. */ }

            { /* Below Code Uses state Property this is used to refer proprties inside our Student Component only for Class Based React App */ }
             <Student 
            name = { this.state.students[0].name }
            age = { this.state.students[0].age }
            rollNo = { this.state.students[0].rollNo } > Cricket, FootBall, Gamblin </Student> 
            <Student 
            name = { this.state.students[1].name }
            age = { this.state.students[1].age }
            rollNo = { this.state.students[1].rollNo }/> 
            <Student 
            name = { this.state.students[2].name }
            age = { this.state.students[2].age }
            rollNo = { this.state.students[2].rollNo } > RoadTrips, Cooking, Gardenning, Sports, Movies, Books </Student> 
            </div>
        )
    };

    // return React.createElement('div', null, 'h4', 'I\'m in React App');
    // return React.createElement('div', {className: 'App'}, React.createElement('h4', null, 'I\'m in React App -Working createElement'));
    // The above 2 lines of Code is Cumbersome measn nested React components is not good practice in our Application is 
}

export default App;