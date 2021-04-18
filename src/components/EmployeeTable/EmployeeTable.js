import React from 'react';

function EmployeeTable(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        <img alt={props.firstName} src={props.picture} />
                    </th>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.phone}</td>
                    <td>{props.email}</td>
                    <td>{props.DOB}</td>
                </tr>
            </tbody>
        </table>



    );
}

export default EmployeeTable;