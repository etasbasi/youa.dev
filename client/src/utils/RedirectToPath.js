import React from "react";
import { Redirect } from "react-router-dom";

const RedirectToPath = path => {
  return (
    <div>
      <Redirect to={path} />
    </div>
  );
};

export default RedirectToPath;
