import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="col1">
        <AiFillFacebook className="col1-icon" />
        <AiOutlineInstagram className="col1-icon" />
        <AiOutlineTwitter className="col1-icon" />
        <AiFillYoutube className="col1-icon" />
      </div>
      <div className="col2">
        <p>conditions to use</p>
        <p>privacy & policy</p>
        <p>press room</p>
      </div>
      <div className="col3">
        <p>&#169; 2023 MovieBox by Abula Martins Onyemuche</p>
      </div>
    </div>
  );
}

export default Footer;
