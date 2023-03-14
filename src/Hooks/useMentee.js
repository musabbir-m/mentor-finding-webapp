import { useEffect, useState } from "react";

const useMentee = (email) => {
    const [ismentee, setIsmentee] = useState(false);
    const [menteeLoading, setmenteeLoading] = useState(true);
  
    useEffect(() => {
      if (email) {
        fetch(`http://localhost:5000/user/mentee/${email}`)
          .then((res) => res.json())
          .then((data) => {
            setIsmentee(data.ismentee);
            setmenteeLoading(false);
          });
      }
    }, [email]);
    return [ismentee, menteeLoading];
  };
  
  export default useMentee;