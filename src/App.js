import React from "react";
import "./App.css";
import CardList from "./CardList-Component/cardList";
import Search from "./Search-Component/search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({searchField: e.target.value});
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    ).then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, searchField} = this.state; 
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <Search placeholder= 'Search Monsters' handleChange={this.handleChange}/>
       <CardList monsters = {filterdMonsters}/>
      </div>
    );
  }
}

export default App;
