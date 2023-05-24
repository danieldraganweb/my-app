import React from "react";

const Job = (props) => {
  return (
    <div className="job">
      <h1>{props.salary}</h1>
      <h3>{props.position}</h3>
      <h2>{props.company}</h2>
      <button>Apply</button>
    </div>
  );
};

export default Job;
