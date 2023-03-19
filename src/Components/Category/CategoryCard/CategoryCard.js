import React, { useContext, useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import PhoneIcon from "@mui/icons-material/Phone";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
const CategoryCard = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [disable, setDisable] = useState(false);
  const handleApply = () => {
    setDisable(true);
    const newApplication = {
      mentor: data.name,
      mentorEmail: data.email,
      category: data.category,
      mentorImg: data.img,
      menteeEmail: user?.email,
    };
    fetch("https://server-findmentor.vercel.app/mentoring", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Success! Wait for approval from your mentor");
      });
  };

  return (
    <div className=" border-[1px] h-80 border-gray-300 rounded-md shadow grid grid-cols-4 gap-5 mt-3 mx-5 my-5">
      <div className="pt-3">
        <img className="rounded-lg ml-2" height="400px" src={data.img} alt="" />
      </div>
      <div className="pt-3 col-span-2">
        <h3 className="text-xl font-semibold text-blue-900">{data.name}</h3>
        <p>
          <span>{data.job}</span> at{" "}
          <span className="text-lg font-semibold">{data.company}</span>
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
      <div className="py-3 px-3 border-l border-gray-200">
        <p className="pt-3 border-b-2 border-gray-200 mb-3 pb-2 text-blue-900 font-semibold ">
          What can I expect from this mentor?
        </p>
        <p>Unlimited chat, e-mail or text with mentor, within boundaries.</p>
        <p className="border-b-2 border-gray-200 pb-2">
          <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>{" "}
          <AlternateEmailOutlinedIcon></AlternateEmailOutlinedIcon>{" "}
          <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>
        </p>
        <p className="border-b-2 pb-2">
          Managing tasks to trak progress and projects
        </p>
        <button
          onClick={handleApply}
          disabled={disable === "true" ? true : false}
          className="mt-2 px-4 py-2 bg-blue-500 rounded text-white"
        >
          Apply now
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
