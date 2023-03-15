import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard/CategoryCard';


const Programming = () => {

    const url= "http://localhost:5000/programming"
    const {
        data: programmingMentors = [],
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
      if (isLoading){
        return <p>Loading..</p>
      }
    return (
        <div>
           <div>
               
           </div>
           <div>

           {programmingMentors.map(mentor=> 
            <CategoryCard
            key={mentor._id}
            data= {mentor}
            ></CategoryCard>
           )}
           </div>
        </div>
    );
};

export default Programming;