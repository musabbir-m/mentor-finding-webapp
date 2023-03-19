import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard/CategoryCard";

const WebDevelopment = () => {
  const url = "https://server-findmentor.vercel.app/webdevelopment";
  const {
    data: webMentors = [],
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
  if (isLoading) {
    return <p>Loading..</p>;
  }
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mt-24 mb-16">
        Top mentors for Web Development
      </h2>
      {webMentors?.map((mentor) => (
        <CategoryCard key={mentor._id} data={mentor}></CategoryCard>
      ))}
    </div>
  );
};

export default WebDevelopment;
