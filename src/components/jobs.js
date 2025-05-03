import React from "react";
import JobCard from "./jobCard";
import jobData from "../data.json"


export default function Jobs() {
  return (
    <div className="min-h-screen bg-teal-50 p-6 space-y-6">
      {jobData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
}
