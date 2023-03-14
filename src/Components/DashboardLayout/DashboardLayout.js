import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useMentee from "../../Hooks/useMentee";
import useMentor from "../../Hooks/useMentor";
import { AuthContext } from "../AuthProvider/AuthProvider";

const DashboardLayout = () => {
    const {user}= useContext(AuthContext)
    const [isAdmin]= useAdmin(user?.email)
    const [isMentee]= useMentee(user?.email)
    const [isMentor]= useMentor(user?.email) 

  return (
    <div className="grid grid-cols-5 lg:grid-cols-4">
      <div className=" bg-red-100">
        {
            isMentee && <>
            <Link to='/myrequest'>My Requests</Link>

            </>
        }
        {
            isAdmin && <>
            <Link>Mentor Requests</Link>
            <Link>All mentors</Link>
            </>
        }
        {
            isMentor && <>
            <Link>Request</Link>
            <Link>Posts</Link>
            <Link> Mentees</Link>
            </>
        }
      </div>
      <div className="col-span-4 lg:col-span-3 bg-blue-300">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
