import React from 'react';
import './Jobs.css';

const Jobs = () => {
  return (
    <div className="jobs-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Find Your Dream Job</h1>
        <p>Discover thousands of job opportunities with all the information you need.</p>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Job title or keyword"
            className="search-input"
          />
          <input 
            type="text" 
            placeholder="Location"
            className="search-input"
          />
          <button className="search-button">Search Jobs</button>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="jobs-grid">
          {[1, 2, 3, 4].map((job) => (
            <div key={job} className="job-card">
              <div className="job-card-header">
                <div className="company-logo">
                  <img src="https://via.placeholder.com/50" alt="Company logo" />
                </div>
                <span className="job-type">Full Time</span>
              </div>
              <h3>Senior Software Engineer</h3>
              <p className="company-name">Tech Company Inc.</p>
              <p className="location">San Francisco, CA</p>
              <p className="salary">$120,000 - $150,000</p>
              <button className="apply-button">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Categories */}
      <section className="job-categories">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {['Technology', 'Marketing', 'Design', 'Sales', 'Finance', 'Healthcare'].map((category) => (
            <div key={category} className="category-card">
              <h3>{category}</h3>
              <p>100+ Jobs Available</p>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies-section">
        <h2>Top Companies Hiring</h2>
        <div className="companies-grid">
          {[1, 2, 3, 4, 5, 6].map((company) => (
            <div key={company} className="company-card">
              <img src="https://via.placeholder.com/80" alt="Company logo" />
              <h3>Company Name</h3>
              <p>10 Open Positions</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
