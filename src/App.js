
import React , {Component} from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
class App extends Component {
    constructor(){
      super();
      this.state = {
        string:'Hello Yehudit'
      };
      this.state ={
        monsters:[]
      /*  monsters:[
          {name:'Frankenstan', id:'12'},
          {name:'Dracula', id:'123'},
          {name:'Zombie', id:'1234'}
        ]
      */
      };
    }
    componentDidMount(){
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response=>response.json())).then(users=>this.setState({monsters:users}));
    }
  render(){
    /* jshint ignore:start */
    return (
      <div className="App">
      <CardList monsters= {this.state.monsters}/>
       {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           { this.state.string}
          </p>
          <button onClick={()=> this.setState({string:'Good Morning  Yehudit'})}></button>
        </header>
        */}
       
      </div>
    );
    
   /* jshint ignore:end */
  }
 
 
}

export default App;
