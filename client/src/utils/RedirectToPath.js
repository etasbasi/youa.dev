import React from "react";
import { Redirect } from "react-router-dom";

export default path => {
  return (
    <div>
      <Redirect to={path} />
    </div>
  );
};
