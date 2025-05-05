import React from "react";
import JobCard from "./jobCard";

export default function Jobs({ jobs, onTagClick, activeTags }) {
  return (
    <div className="min-h-screen bg-teal-50 p-6 space-y-6">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          {...job}
          onTagClick={onTagClick}
          activeTags={activeTags}
        />
      ))}
    </div>
  );
}