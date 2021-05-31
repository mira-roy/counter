
import './App.css';
import React, { Component } from 'react'

class App extends Component{
    constructor(props) {
      super(props);
      this.state ={
        counter :0
      };
    }
  increment(){
    this.setState({
      counter: this.state.counter + 1
    });
  }

decrement(){
    this.setState({
        counter:this.state.counter - 1
  });
}
reset(){
  this.setState({
    counter:0
  })
}
 render() {
   return(
     
      
       <div  className="alignment">
       <div  >{this.state.counter}</div><br/>
       <div>
         <button onClick={() => this.increment()}>+</button>
         <button onClick={() => this.decrement()}>-</button></div><br/><br/>
        <div> <button onClick={() => this.reset()}>Reset</button>
       </div>
     </div>
     
   )
 }
}

  

export default App;
