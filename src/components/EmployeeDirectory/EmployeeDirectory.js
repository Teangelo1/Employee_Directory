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
    { name: "Image", width: "" },
    { name: "Name", width: "25%" },
    { name: "Phone", width: "25%" },
    { name: "Email", width: "25%" },
    { name: "DOB", width: "45%" }
  ]
  // When this component mounts, give us random employees from the API call
  componentDidMount() {
    API.searchEmployees().then(data => {console.log(data); return data}).then(res => this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results
    })).catch(err => console.log(err))
  }

  handleInputChange = event => {
    const value = event.target.value;
    const filtered = this.state.employees.filter(employee => employee.name.first.toLowerCase().startsWith(value.toLowerCase())) // logging data differently after each filter.
    this.setState({
     filteredEmployees: filtered
    });
    console.log(this.state)
  };

  

  // write function to sort data by name and set this content to be the state of the employees.
  

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