//import logo from './logo.svg';
import './App.css';
import React from 'react'
//import {SideBar} from './components/SideBar'
import {SearchBar} from './components/SearchBar'

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      API_KEY:'26f2377688e749061480ecb834fe5dc8'
    }
  }
  render(){
    return (
      <div>
        <button onClick={this.random}></button>
        <SearchBar API_KEY={this.state.API_KEY} />
      </div>
    );
  }
}
export default App;

