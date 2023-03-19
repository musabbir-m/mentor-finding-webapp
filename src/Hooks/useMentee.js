import { useEffect, useState } from "react";

const useMentee = (email) => {
  const [isMentee, setIsmentee] = useState(false);
  const [menteeLoading, setmenteeLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://server-findmentor.vercel.app/user/mentee/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsmentee(data.isMentee);
          setmenteeLoading(false);
        });
    }
  }, [email]);
  return [isMentee, menteeLoading];
};

export default useMentee;
