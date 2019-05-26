import React from "react";

export default function NotFound() {
  return (
    <div id="fourohfour" className="fourohfour">
      <h1 className="fourohfour__heading">404!</h1>
      <p className="fourohfour__message">
        We couldn't find the content you have requested.
      </p>
      <span
        className="fourohfour__span"
        onClick={() => (window.location.href = "/dashboard")}
      >
        Click here to return back to the dashboard.
      </span>
    </div>
  );
}
