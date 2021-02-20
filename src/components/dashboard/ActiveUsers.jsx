import React, { useEffect, useState } from 'react';
import '../../common/admin.scss';

const ActiveUsers = ({ userData }) => {
  const [usersData, setUsersData] = useState(userData.data);
  useEffect(() => {
    // const printUserData = usersData.map((userInfo) => {
    //   setUsersData(userInfo);
    //   return <div>{userInfo}</div>;
    // });
    setUsersData(userData.data);
    // console.log(userData.data);
  }, [userData]);

  return (
    <div className="card-users">
      <div className="heading-users">
        <div>Active Users</div>
        <div>for January 2021</div>
      </div>
      <p>{usersData}</p>
      <div className="user-card" />
    </div>
  );
};

export default ActiveUsers;
