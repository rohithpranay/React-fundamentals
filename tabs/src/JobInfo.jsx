import React from "react";
import { Duties } from "./Duties";

export const JobInfo = ({ jobs, currJob }) => {
  const { company, dates, duties, title } = jobs[currJob];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
