import React from 'react'
import EmployeeTable from '../EmployeeTable/EmployeeTable';

export default function DataBody({headings, employees, handleSort}) {
    return (
        <div>
            <table>
                <tbody>
                    <th>
                        <tr>
                        {headings.map(({ name, width }) => {
              return (
                <th
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
                        </tr>
                    </th>
                </tbody>
                <EmployeeTable
                employees={employees} />
            </table>


        </div>
    )
}
