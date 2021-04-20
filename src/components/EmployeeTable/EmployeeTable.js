import React from 'react';

function EmployeeTable(props) {
    // return (
    //     <table>
    //       <tbody>
    //         {props.employees.map(({ picture, name, phone, email, dob }) => (
    //           <tr>
    //             <th>
    //               <img alt={`${name.first} ${name.last}`} src={picture.thumbnail} />
    //             </th>
    //             <td>Name: {`${name.first} ${name.last}`}</td>
    //             <td>Phone Number: {phone}</td>
    //             <td>Email: {email}</td>
    //             <td>DOB: {dob.date}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   );
    return (
        <table>
            <tbody>
                {/* {props.employees.map(({firstName, lastName, picture, phone, email,dob}))} */}
                <tr>
                    <th>
                        <img alt={props.name} src={props.picture} />
                    </th>
                    
                    <td>First Name: {props.lastName}</td>
                    <td>Last Name: {props.firstName}</td>
                    <td>Phone Number: {props.phone}</td>
                    <td>Email: {props.email}</td>
                    <td>DOB: {props.DOB}</td>
                </tr>
            </tbody>
        </table>



    );
 }

export default EmployeeTable;