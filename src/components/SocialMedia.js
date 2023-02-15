import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const SocialMedia = () => {
  return (
     <>
      <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/akkytricks/" target="_blank">
                <i> <BsFacebook/></i>
              </a>
              <a href="https://github.com/devakashpandey" target="_blank" >
                <i> < BsGithub/></i>
              </a>
              <a href="https://www.instagram.com/codingwithakash/" target="_blank">
                <i>< BsInstagram /></i>
              </a>
              <a href="https://www.linkedin.com/in/devakashpandey/" target="_blank">
              <i><AiFillLinkedin/></i>
              </a>
            </div>
          </div>
     </>
  )
}

export default SocialMedia
