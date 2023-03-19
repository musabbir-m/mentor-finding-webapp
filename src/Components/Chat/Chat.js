import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Test from "../Test/Test";
import ChatRoom from "./ChatRoom";
const socket = io.connect("https://server-findmentor.vercel.app/");

const Chat = () => {
  const { user } = useContext(AuthContext);

  const [messageRecieved, setMessageRecieved] = useState("");
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");

  const currentMessage = (event) => {
    event.preventDefault();
  };
  //send to server
  const sendMessage = () => {
    socket.emit("send-message", { message });
  };

  //recieve the sent message from server

  useEffect(() => {
    socket.on("my_message", (data) => {
      console.log(data);
    });
  });

  //join a room
  const joinRoom = () => {
    if (user?.displayName !== "" && room !== "") {
      socket.emit("join-room", room);
    }
  };

  const handleSetRoom = (e) => {
    e.preventDefault();
    const form = e.target;
    const room = form.room.value;

    setRoom(room);
    joinRoom();
  };

  return (
    <div className="mx-auto flex justify-center flex-col">
      <h2 className="text-4xl font-semibold text-center my-10">
        {" "}
        Join a Community room to ask or answer a question
      </h2>

      <h4 className="text-3xl text-center">Rooms</h4>

      <div className="mx-10">
        <h2>Recieved message</h2>
        <p>{messageRecieved}</p>
        <input
          className="border-2 border-gray-500 max-w-sm mx-auto"
          type="text"
          onChange={currentMessage}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div className="flex justify-center align-center ">
        <form action="" onSubmit={handleSetRoom}>
          <select
            className=" mb-3 h-10  border-2 rounded"
            placeholder="User type"
            name="room"
          >
            <option value="Web Development">Web Development</option>
            <option value="Programming">Programming</option>
            <option value="Ux and Design">UX and Design</option>
            <option value="Product and Marketing">Product and Marketing</option>
          </select>
          <button
            type="submit"
            className="block bg-green-500 text-white px-3 py-1"
          >
            Confirm
          </button>
        </form>
      </div>
      {/* Chat component */}
      <ChatRoom room={room} socket={socket}></ChatRoom>
    </div>
  );
};

export default Chat;
