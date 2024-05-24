import React from "react";

export const BtnContainer = ({ jobs, handleCurrJob, currJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, indx) => (
        <button
          onClick={() => handleCurrJob(item.company)}
          key={item.id}
          className={currJob === indx ? "job-btn active-btn" : "job-btn"}
        >
          {item.company}
        </button>
      ))}
    </div>
  );
};
