import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  overflow-y: scroll;
  height: 600px;

  @media only screen and (max-width: 768px) {
    width: 80vw;
    overflow-x: scroll;
  }

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
  border-bottom: 1px solid #cccccc;
`;
const Tabledata = styled.td`
  padding: 1rem 1rem 1rem 0;
  border-bottom: 0.5px solid #333333;
`;

const Tickets = ({ userData }) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableRow>
            <TableHeadings>Name</TableHeadings>
            <TableHeadings>Email (Username)</TableHeadings>
            <TableHeadings>Ticket ID (Password)</TableHeadings>
          </TableRow>
          {userData.map((user, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <TableRow key={index}>
                <Tabledata>{user.name || '-'}</Tabledata>
                <Tabledata>{user.email || '-'}</Tabledata>
                <Tabledata>{user.ticketId || '-'}</Tabledata>
              </TableRow>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tickets;
