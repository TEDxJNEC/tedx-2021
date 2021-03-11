import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-y: scroll;
  height: 600px;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

const Table = styled.table`
  width: 80vw;
  height: 600px;
  overflow: scroll;
  text-align: left;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
`;
const TableHeadings = styled.th`
  padding: 1rem 1rem 1rem 0;
  border-bottom: 1px solid #ddd;
`;
const Tabledata = styled.td`
  padding: 1rem 1rem 1rem 0;
`;

const UserTable = ({ userData }) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableRow>
            <TableHeadings>Name</TableHeadings>
            <TableHeadings>Email</TableHeadings>
            <TableHeadings>Phone No.</TableHeadings>
            <TableHeadings>Address</TableHeadings>
            <TableHeadings>Age</TableHeadings>
            <TableHeadings>Occupation Desc.</TableHeadings>
          </TableRow>
          {userData.map((user, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={index}>
                <Tabledata>{user.name || '-'}</Tabledata>
                <Tabledata>{user.email || '-'}</Tabledata>
                <Tabledata>{user.phoneNo || '-'}</Tabledata>
                <Tabledata>{user.address || '-'}</Tabledata>
                <Tabledata>{user.age || '-'}</Tabledata>
                <Tabledata>{user.occupationDescription || '-'}</Tabledata>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
