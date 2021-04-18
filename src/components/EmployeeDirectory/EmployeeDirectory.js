import React, { Component } from "react";
import Search from '../Search/Search'
import API from "../../../src/utils/API";

class EmployeeDirectory extends Component {
  state = {
    search: '',
    employees: [],
    order: '',
    filteredEmployees: []
    
  };

  // When this component mounts, search for the employee
  componentDidMount() {
    API.searchEmployees().then(res => this.setState({
        employees: res.data.results,
        filteredEmployees: res.data.results
    })).catch(err => console.log(err))
}

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

export default EmployeeDirectory;