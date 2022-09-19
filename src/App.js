import React, {Component} from 'react';
import "./App.css";
import userData from './data/data.json';
import { CardList } from './Components/Card-list/card-list.component';
import {SearchBox} from './Components/Search-box/serach-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
      searchField: ''
    };
  }

  componentDidMount() {
    this.setState({students : userData})
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {students, searchField} = this.state;
    const filteredStd = students.filter(std => (
      std.first_name.toLowerCase().includes(searchField.toLowerCase()) 
      || std.last_name.toLowerCase().includes(searchField.toLowerCase())
      ));
    return (
      <div className="App">
        <h1>Students List</h1>
        <SearchBox 
          placeholder="search for Student" 
          handleChange={this.handleChange} 
        />
        <CardList students={filteredStd} />
      </div>
    )
  }
}

export default App;
