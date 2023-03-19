import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MenteeCard = ({ mentee }) => {
  //get mentee details
  const url = `https://server-findmentor.vercel.app/user/${mentee.menteeEmail}`;
  const {
    data: oneMentee = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["programming"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="px-4 py-6 border-2 border-gray-300 rounded-md">
      <div className="flex gap-3">
        <Avatar className="w-24 h-24" alt="" src={oneMentee.img} />
        <div className="mt-">
          <h2 className="text-xl font-semibold mb-3">{oneMentee.name}</h2>
          <div className="flex gap-2">
            <button className="py-1 px-2 text-sm  bg-blue-400 rounded text-white">
              See details
            </button>

            <button className="py-1 px-2 text-sm  bg-green-400 rounded text-white">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeCard;
