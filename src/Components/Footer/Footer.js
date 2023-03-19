import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="h-72 shadow-lg py-24 px-16 border-2 bg-gray-100 border-gray-200 flex justify-between">
      <div>
        <h4 className=" mb-8 text-xl font-semibold text-blue-900">
          Findmentor
        </h4>

        <p className="mb-5 text-sm text-gray-600">
          <CopyrightIcon></CopyrightIcon> 2023
        </p>
        <p> Company | Terms| Privacy</p>
      </div>
      <div>
        <div>
          <FacebookIcon></FacebookIcon> <YouTubeIcon></YouTubeIcon>{" "}
          <TwitterIcon></TwitterIcon>
          
        </div>
        <div className="flex gap-4 mt-6">
            <p>About</p>
            <p>FAQ</p>
            <p>Contact</p>
            <p>Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
