import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MenteeCard from "./MenteeCard";

const MentoringRequest = () => {
  const { user } = useContext(AuthContext);
  const url = `https://server-findmentor.vercel.app/mentoring/${user.email}`;
  const {
    data: mentoringRequest = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["mentoring"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <div className="mx-10">
      <h2 className="text-4xl font-semibold text-center text-blue-900 py-10 ">
        Mentoring requests for you{" "}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {mentoringRequest?.map((mentee) => (
          <MenteeCard key={mentee._id} mentee={mentee}></MenteeCard>
        ))}
      </div>
    </div>
  );
};

export default MentoringRequest;
