import React, { Component } from "react";
import "./App.css";
import userData from "./data/data.json";
import { CardList } from "./Components/Card-list/card-list.component";
import { SearchBox } from "./Components/Search-box/serach-box.component";
import { Modal } from "./Components/Modal/modal.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: [],
      searchField: "",
      openModal: false,
      studentId: "",
    };
  }

  componentDidMount() {
    this.setState({ students: userData });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  getId = (id) => {
    if (id > 0) this.setState({ openModal: true });
    return this.setState({ studentId: id });
  };

  render() {
    const { students, searchField, studentId } = this.state;
    const filteredStd = students.filter(
      (std) =>
        std.first_name.toLowerCase().includes(searchField.toLowerCase()) ||
        std.last_name.toLowerCase().includes(searchField.toLowerCase())
    );
    const filterById = students.filter((std) => std.id === studentId);
    return (
      <div className="App">
        <h1>Students List</h1>
        <SearchBox
          placeholder="search for Student"
          handleChange={this.handleChange}
        />
        <CardList students={filteredStd} studentId={this.getId} />
        <Modal
          open={this.state.openModal}
          onclose={() => this.setState({ openModal: false })}
          student={filterById}
        />
      </div>
    );
  }
}

export default App;
