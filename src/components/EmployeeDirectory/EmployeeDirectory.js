import React, { Component } from "react";
import Search from '../Search/Search'
import API from "../../../src/utils/API";
import EmployeeTable from '../EmployeeTable/EmployeeTable';

class EmployeeDirectory extends Component {
  state = {
    filterValue: '',
    employees: [],
    order: '',
    filteredEmployees: []

  };

  // When this component mounts, search for the employee
  componentDidMount() {
    API.searchEmployees().then(data => {console.log(data); return data}).then(res => this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results
    })).catch(err => console.log(err))
  }

  handleInputChange = event => {
    const value = event.target.value;
    const filtered = this.state.filteredEmployees.filter(employee => employee.name.first.toLowerCase().startsWith(value.toLowerCase())) // logging data differently after each filter.
    this.setState({
     filteredEmployees: filtered
    });
    console.log(this.state)
  };

  // // When the form is submitted, search the Random User API for the value of `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchEmployee(this.state.search);
  // };

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
        // handleFormSubmit={this.handleFormSubmit}
        />

        <EmployeeTable
        //  name={this.state.results.firstName} 
         />
      </div>





    );
  }
}

export default EmployeeDirectory;