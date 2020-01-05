import React from 'react';

// Use ES6 Arraow Function rather than ES-5 Var .
// props is properties or attributes which decleared here that needs to be defined in APP.JS 
const student = (props) => { 
    return (
    <div>
    <p>Inside a Student Component : Use of MathRandom Function {Math.floor(Math.random() *24)}
        <h2>StudentName: {props.name} 
        Age:{props.age} 
        StudentID: {props.rollNo}</h2></p>
        <p>Hobbies:{props.children}</p>
    </div>
    );
};

export default student; // Export must be equal to name of the function we want to export.