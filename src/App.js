import React, { useState, useCallback } from "react";
import './App.css';
import Jobs from './components/jobs';
import Header from './components/header';
import FilterBar from "./components/filterBar";
import jobData from "./data.json";

export default function App() {
  const [filters, setFilters] = useState([]);

  const addFilter = useCallback((tag) => {
    setFilters((prev) =>
      prev.includes(tag) ? prev : [...prev, tag]
    );
  }, []);

  const removeFilter = useCallback((tag) => {
    setFilters((prev) => prev.filter((f) => f !== tag));
  }, []);

  const clearFilters = useCallback(() => setFilters([]), []);

  const filteredJobs = filters.length
  ? jobData.filter(job => {
      const jobTags = [
        job.role,
        job.level,
        ...(job.tools || []),
      ];
      return filters.every(tag => jobTags.includes(tag));
    })
  : jobData;

  return (
    <div className="App">
      <Header />
      <FilterBar
        filters={filters}
        onRemove={removeFilter}
        onClear={clearFilters}
      />
      <Jobs
        jobs={filteredJobs}
        onTagClick={addFilter}
        activeTags={filters}
      />
    </div>
  );
}