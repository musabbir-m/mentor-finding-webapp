import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useMentee from "../Hooks/useMentee";
import useMentor from "../Hooks/useMentor";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";
import { Button, ButtonGroup } from "@mui/material";
import { IcecreamRounded } from "@mui/icons-material";
import Navbar from "../Components/Shared/Navbar/Navbar";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isMentee] = useMentee(user?.email);
  const [isMentor] = useMentor(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-5 lg:grid-cols-4 relative">
        <div className=" b border-2  border-gray-300 sticky-top-0">
       <div className="bg-gray-200 py-2"> <RocketLaunchIcon></RocketLaunchIcon><p className="md:inline hidden font-semibold">Dashboard</p></div>
          {isMentee && (
            <>
              <Link to="/dashboard/myrequest">My Requests</Link>
            </>
          )}
          {isAdmin && (
             <div className="py-3  flex flex-col">
              
             <ButtonGroup orientation="vertical">
               <Button>
               <Link>All mentors</Link>
               </Button>
               <Button>
               <Link>Mentor Requests</Link>
               </Button>
              
             </ButtonGroup>
           </div>
           
          )}
          {isMentor && (
            <div className="py-3  flex flex-col">
              
              <ButtonGroup orientation="vertical">
                <Button>
                  <IcecreamRounded></IcecreamRounded>{" "}
                  <Link to='/dashboard/mentoringrequest' className="">Request</Link>
                </Button>
                <Button>
                  <Link>Posts</Link>
                </Button>
                <Button>
                  <Link> Mentees</Link>
                </Button>
              </ButtonGroup>
            </div>
          )}
        </div>
        <div className="col-span-4 lg:col-span-3 h-screen px-5 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
