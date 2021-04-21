import React, { Component } from "react";
import Search from '../Search/Search'
import API from "../../../src/utils/API";

import DataBody from '../DataBody/DataBody';

class EmployeeDirectory extends Component {
  state = {
    filterValue: '',
    employees: [{}],
    order: 'ascend',
    filteredEmployees: [{}]

  };

  headings = [
    { name: "Image", width: "20%" },
    { name: "Name", width: "20%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "20%" }
  ]
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


  // write function to sort data by name and set this content to be the state of the filtered employees.
  

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
        
        />

        <DataBody 
        headings={this.headings}
        employees={this.state.filteredEmployees}
        // handleSort={this.handleSort}
        />
      </div>





    );
  }
}

export default EmployeeDirectory;