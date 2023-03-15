import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';
import RequestCard from './RequestCard';

const MyRequest = () => {
    const {user}= useContext(AuthContext)
    const url = `http://localhost:5000/myrequest/${user?.email}`
    const {
        data: myRequest = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["myrequest"],
        queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
        },
      });
      if(isLoading){
        return <p>Loading...</p>
      }
    return (
        <div>
             <h2 className='text-4xl font-semibold text-center text-blue-900 py-10 '>Your Requests</h2>
            <div className='grid grid-cols-2 gap-3'>
            {
             myRequest?.map(request=> <RequestCard
             key={request._id}
             data= {request}
             ></RequestCard>)
            }
        </div>
        </div>
    );
};

export default MyRequest;