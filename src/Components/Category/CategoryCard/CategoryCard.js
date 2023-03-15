import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
const CategoryCard = ({ data }) => {
  return (
    <div className=" border-2 h-80 border-gray-300 border-rounded shadow-md grid grid-cols-4 gap-5 mt-3">
      <div className="pt-3">
        <img className="rounded-lg" height="400px" src={data.job} alt="" />
      </div>
      <div className="pt-3 col-span-2">
        <h3 className="text-xl font-semibold text-blue-900">{data.name}</h3>
        <p>
          <span>{data.company}</span> at{" "}
          <span className="text-lg font-semibold">{data.img}</span>
        </p>
        <div className="flex  gap-4 border-y-2 border-gray-300 px-auto mt-4">
          <p>
            <MessageIcon></MessageIcon> chat
          </p>
          <p>
            <PhoneIcon></PhoneIcon> calls
          </p>
          <p>
            <TaskIcon></TaskIcon> task
          </p>
          <p>
            <AssignmentIndIcon></AssignmentIndIcon> hands-on
          </p>
        </div>
        <p className="mt-2">{data.bio}</p>
      </div>
      <div className="py-3 px-3 border-l-2 border-gray-200">
        <p className="pt-5">What can I expect from this mentor?</p>

        <button className="px-4 py-2 bg-blue-500 rounded text-white">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
