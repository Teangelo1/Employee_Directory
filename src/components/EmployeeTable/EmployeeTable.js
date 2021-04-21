import React from 'react';

function EmployeeTable({ employees }) {
    return (
        <table>
            <tbody>

                {employees[0] !== undefined && employees[0].name !== undefined? 
                    (employees.map(({ picture, name, phone, email, dob }) => (
                        <tr>
                            <th>
                                <img alt={name.first + "" + name.last} src={picture.thumbnail} />
                            </th>
                            <td>Name: {name.first + "" + name.last}</td>
                            <td>Phone Number: {phone}</td>
                            <td>Email: {email}</td>
                            <td>DOB: {dob.date}</td>
                        </tr>
                    ))): 
                    // fragment
                  <> No employees found </>  } 
            </tbody>
        </table>
    );
    // return (
    //     <table>
    //         <tbody>
    //             {/* {props.employees.map(({firstName, lastName, picture, phone, email,dob}))} */}
    //             <tr>
    //                 <th>
    //                     <img alt={props.name} src={props.picture} />
    //                 </th>

    //                 <td>First Name: {props.lastName}</td>
    //                 <td>Last Name: {props.firstName}</td>
    //                 <td>Phone Number: {props.phone}</td>
    //                 <td>Email: {props.email}</td>
    //                 <td>DOB: {props.DOB}</td>
    //             </tr>
    //         </tbody>
    //     </table>




}

export default EmployeeTable;