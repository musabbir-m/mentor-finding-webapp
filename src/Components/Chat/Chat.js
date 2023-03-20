import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Test from "../Test/Test";
import ChatRoom from "./ChatRoom";
const socket = io.connect("https://server-findmentor.vercel.app");

const Chat = () => {
  const { user } = useContext(AuthContext);

  
  const [room, setRoom] = useState("Web Development");
  console.log(room);

  const JoinRoom = () => {
    if (user.displayName !== "" && room !== "") {
      socket.emit("join_room", room);
      toast(`Joind in Room: ${room}`);
      console.log("joined", room);
    }
  };

  return (
    <div className="mx-auto flex justify-center flex-col">
      <h2 className="text-4xl font-semibold text-center my-10">
        {" "}
        Join a Community room to ask <br /> or answer a question
      </h2>

      <h4 className="text-2xl mr-5 text-center">Select Room</h4>

      <div className="flex justify-center align-center ">
        <select
          onChange={(e) => {
            setRoom(e.target.value);
          }}
          className=" mb-3 h-10  border-2 rounded"
          name="room"
        >
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
          <option value="Ux and Design">UX and Design</option>
          <option value="Product and Marketing">Product and Marketing</option>
        </select>
        <button
          onClick={JoinRoom}
          className="ml-5 bg-green-500 text-white px-3 h-10 hover:bg-green-600"
        >
          Join
        </button>
      </div>
      {/* Chat component */}
      <ChatRoom room={room} socket={socket} ></ChatRoom>
    </div>
  );
};

export default Chat;
