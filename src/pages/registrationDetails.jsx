/* eslint-disable no-lonely-if */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DefaultLayout from 'layouts';
import axios from 'axios';
import UserTable from 'components/UserTable';
import BookedUsersTable from 'components/BookedUsersTable';
// import API_ROUTES from 'constants/api';

const TableWrapper = styled.div`
  min-height: calc(100% - 80px);
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 0.5rem 3rem;
`;

const RegistrationDetails = () => {
  //   const { REGISTRATION_DETAILS } = API_ROUTES;
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [bookedUsers, setBookedUsers] = useState([]);
  const [unRegisteredUsers, setUnRegisteredUsers] = useState([]);
  useEffect(() => {
    axios
      .get('http://api.tedxjnec.com/api/users')
      .then((res) => {
        console.log(res.data);
        const userData = res.data;
        const bkusrs = [];
        const regusrs = [];
        const unregusrs = [];
        for (let i = 6; i < userData.length; i += 1) {
          if (userData[i].amountPaid > 0) {
            bkusrs.push(userData[i]);
          } else {
            if (userData[i].phoneNo) {
              regusrs.push(userData[i]);
            } else {
              unregusrs.push(userData[i]);
            }
          }
        }
        setRegisteredUsers(regusrs);
        setBookedUsers(bkusrs);
        setUnRegisteredUsers(unregusrs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DefaultLayout>
      <Title>Registered Users</Title>
      <TableWrapper>
        <UserTable userData={registeredUsers} />
      </TableWrapper>
      <Title>UnRegistered Users</Title>
      <TableWrapper>
        <UserTable userData={unRegisteredUsers} />
      </TableWrapper>
      <Title>Bookings</Title>
      <TableWrapper>
        <BookedUsersTable userData={bookedUsers} />
      </TableWrapper>
    </DefaultLayout>
  );
};

export default RegistrationDetails;
