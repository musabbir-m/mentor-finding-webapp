import { useEffect, useState } from "react";

const useMentor = (email) => {
    const [isMentor, setMentor] = useState(false);
    const [mentorLoading, setMentorLoading] = useState(true);
  
    useEffect(() => {
      if (email) {
        fetch(`http://localhost:5000/user/mentor/${email}`)
          .then((res) => res.json())
          .then((data) => {
            setMentor(data.isAdmin);
            setMentorLoading(false);
          });
      }
    }, [email]);
    return [isMentor, mentorLoading];
  };
  
  export default useMentor;