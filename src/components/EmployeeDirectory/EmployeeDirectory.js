import React, { Component } from "react";
import Search from '../Search/Search'
import API from "../../../src/utils/API";

class EmployeeDirectory extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the employee
  componentDidMount() {
    this.searchEmployee('');
  }

  searchEmployee = query => {
    API.searchEmployees(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Random User API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() {
    return (

              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
         
    );
  }
}
console.log(Search);

export default EmployeeDirectory;
