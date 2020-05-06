import React from "react";

// A basic page header with image (optional) and title
function PageHeader(props) {
  return (
    <div>
      <div className="flex w-screen border-b border-gray-200 top-0 z-100 h-16 items-center">
        {props.image && <img className="h-12 ml-5" src={props.image} alt="" />}
        <div className="text-lg ml-5 ">{props.title}</div>
      </div>
      <div className="w-screen h-16" />
    </div>
  );
}

export default PageHeader;
