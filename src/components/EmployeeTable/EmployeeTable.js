import React from 'react';

function EmployeeTable(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        <img alt={props.name} src={props.picture} />
                    </th>
                    <td>Name: {props.name}</td>
                    <td>Phone Number: {props.phone}</td>
                    <td>Email: {props.email}</td>
                    <td>DOB: {props.DOB}</td>
                </tr>
            </tbody>
        </table>



    );
}

export default EmployeeTable;