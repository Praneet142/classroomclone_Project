import React from "react";
import {NavLink, useLocation } from "react-router-dom";

const HeaderClass = () => {
  const location = useLocation();
  const urlPath = location.pathname;

  const classId = urlPath.split("/")[3];
  return (
    <header
      className="flex flex-row items-center justify-between  bg-white shadow-xl font-semibold"
      style={{
        fontFamily: ["Montserrat", "sans-serif"],
      }}
    >
      
      <div className="flex flex-row justify-between mr-16 sm:mr-0">
        <NavLink
          className="mx-8 h-16 flex items-center sm:mx-4"
          end
          to={`enter/class/${classId}`}
        >
          Feed
        </NavLink>
        
        <NavLink
          className="mx-8 h-16 flex items-center sm:mx-4"
          end
          to={`enter/class/${classId}/people`}
        >
          People
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderClass;
