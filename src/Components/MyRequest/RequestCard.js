import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Avatar } from '@mui/material';

const RequestCard = ({data}) => {
    const url = `http://localhost:5000/user/${data.mentorEmail}`;
    const {
      data: oneMentor = [],
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
            
            <div className="px-4 py-6 border-2 border-gray-300 rounded-md" >
      <div className="flex gap-3">
      <Avatar className="w-24 h-24" alt="" src={oneMentor.img} />   
      <div className="mt-">
      <div className='flex justify-between'>
      <h2 className="text-xl font-semibold mb-3">{oneMentor.name}</h2> 
      
      <button className='  text-sm rounded-lg text-pink-700 pb-3'>Pending</button>
      </div>
      <div className="flex gap-2">
      <button className="py-1 px-2 text-sm  bg-blue-400 rounded text-white">See details</button>  
      
      <button className="py-1 px-2 text-sm  bg-green-400 rounded text-white">Send message</button>
      </div>
      </div>
      
      </div>
      
    </div>
        </div>
    );
};

export default RequestCard;