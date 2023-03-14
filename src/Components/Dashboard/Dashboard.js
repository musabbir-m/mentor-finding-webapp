import React, { useContext } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import useMentee from '../../Hooks/useMentee';
import useMentor from '../../Hooks/useMentor';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {
    const {user}= useContext(AuthContext)
    const [isAdmin]= useAdmin(user?.email)
    const [isMentor]= useMentor(user?.email)
    const [isMentee]= useMentee(user?.email)

    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default Dashboard;