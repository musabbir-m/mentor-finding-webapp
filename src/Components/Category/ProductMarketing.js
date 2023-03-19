import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import { useQuery } from "@tanstack/react-query";

const ProductMarketing = () => {
  const url = "https://server-findmentor.vercel.app/productmarketing";
  const {
    data: productMentors = [],
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
        Top mentors for Product and Mrketing
      </h2>
      {productMentors?.map((mentor) => (
        <CategoryCard key={mentor._id} data={mentor}></CategoryCard>
      ))}
    </div>
  );
};

export default ProductMarketing;
