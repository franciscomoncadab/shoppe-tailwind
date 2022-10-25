import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../routes/routes";

function NotFoundPage() {
  return (
    <div 
      className="relative flex flex-col justify-center items-center">
      <h1 className="text-4xl font-medium mt-52 p-3">404 ERROR</h1>
      <p className="text-dark-gray">
          This page not found;
          <br/>
      </p>
      <p className="text-dark-gray">back to home and start again</p> 
      <button className="mt-16 ">
          <Link to={HOME} className="font-semibold text-sm border rounded-sm px-8 py-2">HOMEPAGE</Link>
      </button>
    </div>
  );
}

export default NotFoundPage;
