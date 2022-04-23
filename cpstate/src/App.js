
import './App.css';
import React,{Component} from 'react';
import Person from './Components/Profile';

class App extends Component {
  state = {
    show:false,
  }
  handleShow=()=>{
    this.setState({show:!this.state.show})
  }
  render(){
    return(
      <div className="App">
      <button onClick={this.handleShow}>Show</button>
      {
        this.state.show?<Person/>:"Hello"
      }
      </div>
    )
  }
}

export default App;
