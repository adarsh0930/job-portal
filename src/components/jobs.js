import React from "react";
import JobCard from "./jobCard";
import jobData from "../data.json"


export default function Jobs() {
  return (
    <div className="min-h-screen bg-teal-50 p-6 space-y-6">
      <JobCard {...jobData[0]}/>
      <JobCard {...jobData[1]}/>
      <JobCard {...jobData[2]}/>
      <JobCard {...jobData[3]}/>
      <JobCard {...jobData[4]}/>
      <JobCard {...jobData[5]}/>
      <JobCard {...jobData[6]}/>
      <JobCard {...jobData[7]}/>
      <JobCard {...jobData[8]}/>
      <JobCard {...jobData[9]}/>
    </div>
  );
}
