/* eslint-disable no-lonely-if */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DefaultLayout from 'layouts';
import axios from 'axios';
import TicketCredentials from 'components/Tickets';

const TableWrapper = styled.div`
  min-height: calc(100% - 80px);
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 0.5rem 3rem;
`;

const Credentials = () => {
  const [bookedUsers, setBookedUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.tedxjnec.com/api/users')
      .then((res) => {
        console.log(res.data);
        const userData = res.data;
        const bkusrs = [];
        for (let i = 6; i < userData.length; i += 1) {
          if (userData[i].amountPaid > 0) {
            bkusrs.push(userData[i]);
          }
        }

        setBookedUsers(bkusrs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DefaultLayout>
      <Title>Ticket Credentials</Title>
      <TableWrapper>
        <TicketCredentials userData={bookedUsers} />
      </TableWrapper>
    </DefaultLayout>
  );
};

export default Credentials;
