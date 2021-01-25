import React from 'react';
import '../../common/admin.scss';

const ActiveUsers = () => {
    return (
        <div className='card-users'>
            <div className='heading-users'>
                <div>Active Users</div>
                <div>for January 2021</div>
            </div>
            <div className='user-card'></div>
        </div>
    );
};

export default ActiveUsers;
