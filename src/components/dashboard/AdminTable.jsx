import React from 'react';
import '../../common/admin-table.scss';

const data = [
  {
    name: 'Pruthvi Shetty',
    email: 'email@email.com',
    ticketId: '1234',
  },

  {
    name: 'Riya',
    email: 'riya@email.com',
    ticketId: '1234',
  },
  {
    name: 'Soham',
    email: 'soham@email.com',
    ticketId: '1234',
  },
  {
    name: 'Ayush',
    email: 'ayush@email.com',
    ticketId: '1234',
  },
];

const columns = [
  {
    name: 'Name',
    acessor: 'name',
  },
  {
    name: 'email',
    acessor: 'email',
  },
  {
    name: 'Ticket ID',
    acessor: 'ticketId',
  },
];

const AdminTable = () => {
  return (
    <div className="container">
      <table className="styled-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th> {column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td> {data.name}</td>
              <td> {data.email}</td>
              <td> {data.ticketId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
