console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Convert ES5 to ES6:
1) 
function sum(x,y){
  return x+y
}

2) 
function consoleReturn(x,y){
  console.log(x)
  return y
}

3) 
var name="Alex"
var age=25
var result="My name is: " + name + "and my age is: " + age

4)
var food="Fried Chicken"
var color="Blue"
var object={
  food:food,
  color:color
}

5)
var object2={
  multi:function(a,b){
    return a * b
  }
}
*/

//1) WRITE YOUR CODE UNDER THIS LINE         
// x=>(x,y)=x+y
//2) WRITE YOUR CODE UNDER THIS LINE         
// consolereturn=>(x,y)=y
//3) WRITE YOUR CODE UNDER THIS LINE 
// let name ="alex";
// let age=25;        
// x=>(name,age)="My name is"+name+"and my age is"+age;
// i remember  to use some thing can do all we need with tags to give user like <h1>blabla ${nameo or"what you want}</h1>
// but must use "let "


//4) WRITE YOUR CODE UNDER THIS LINE         
// let food ="fried chicken";
// let color="Blue";
// object=>{
//   food,
//   color
// };

//5) WRITE YOUR CODE UNDER THIS LINE         
// mul=>(a,b)=a*b;






/* Q2:
Using OOP
Create a class called Computer
that takes three parameter (OS,RAM,CPU)
and a method called doubleRAM the ram to double and return the new ram
and make three instantiations from it
computer1 => Windows,16,I7
computer2 => Linux,8,I5
computer3 => Mac,4,I3

Example: 
computer1
Output =>
{
  OS:'Windows',
  RAM:16,
  CPU:'I7',
  doubleRAM:f(){}
}
*/

// WRITE YOUR CODE UNDER THIS LINE
// class Computer {
//   constructor{OS,RAM,CPU){
//     OS=this .OS
//     RAM=this.RAM
//     CPU=this.CPU
//   }
// doubleRAm:f=>obj{OS,RAM,CPU}
//   }
  // there is error in synatax in "constructor" must be using this and and () in constructor.








/* Q3:
You have this two react components
please fix the errors inside them
*/

// App Component
import React ,{ Component } from "react";
import App from '.App';
import Tasks from './components/Tasks';

export default class App extends Component {
  state = {
    title: 'ELIZABETH GREENE',
    todos: ['eat', 'eat eat', 'eact again']
  };
  changeTitle() {
  setState.title = 'AGGREGOR ZOLDYCK'
  }
  render() {
    return (
      <div>
      <h1>App Component => state.title</h1>
      <button onClick={this.title.changeTitle}>Change Title</button>
      <Tasks tasks={this.todos} changeTitleFromChild={this.changeTitle} />
      </div>
    );
  }
}

// Tasks Component
import React, { Component } from 'react';
import Tasks from './Tasks'
export default class Tasks extends Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    setState.day = 'Sun'
  }

  render() {
    return (
      <div>
        <h1>Tasks Component => state.day</h1>
        <button onClick={this.changeDay}>Change Tasks State</button>
        <button onClick={this.props.changeTitleFromChild}>Change App State</button>
      </div>
    );
  }
}
