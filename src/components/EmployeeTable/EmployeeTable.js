import React from 'react';

function EmployeeTable({ employees }) {
    return (
        <table>
            <tbody>

                {employees[0] !== undefined && employees[0].name !== undefined? 
                    (employees.map(({ picture, name, phone, email, dob }) => (
                        <tr>
                            <th>
                                <img alt={name.first + " " + name.last} src={picture.thumbnail} />
                            </th>
                            <td>Name: {name.first + " " + name.last}</td>
                            <td>Phone Number: {phone}</td>
                            <td>Email: {email}</td>
                            <td>DOB: {dob.date}</td>
                        </tr>
                    ))): 
                    // fragment to display "No employees found if the user searches for an employee not in the list"
                  <> No employees found </>  } 
            </tbody>
        </table>
    );


}

export default EmployeeTable;