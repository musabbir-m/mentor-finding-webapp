import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard/CategoryCard';

const UxDesign = () => {
    const url= "http://localhost:5000/uxdesign"
    const {
        data: uxMentors = [],
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
        <div>
             <h2 className='text-5xl font-bold text-center mt-24 mb-16'>Top mentors for UX and Design</h2>
            {uxMentors?.map(mentor=> 
            <CategoryCard
            key={mentor._id}
            data= {mentor}
            ></CategoryCard>
           )}
        </div>
    );
};

export default UxDesign;