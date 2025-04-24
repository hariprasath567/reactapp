import React from "react";
import starklogo from "./assets/logo123.jpg";

const ProfileCard = ({ profile }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "30px",
            border: "2px solid black",
            borderRadius: "10px",
            width: "350px",
            background: "linear-gradient(135deg,rgb(71, 188, 235),rgb(39, 29, 129),rgb(126, 35, 88))",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              border: "2px solid white",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
            src={starklogo}
            alt="Logo"
          />
          <div>
            <span>Name : </span>
            <span>{profile.name}</span>
          </div>
          <div>
            <span>Department : </span>
            <span>{profile.Department}</span>
          </div>
          <div>
            <span>Year : </span>
            <span>{profile.year}</span>
          </div>
          <div>
            <span>Mobile : </span>
            <span>{profile.mobile}</span>
          </div>
          <div>
            <span>Address : </span>
            <span>{profile.address}</span>
          </div>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00acee", textDecoration: "none" }}
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
