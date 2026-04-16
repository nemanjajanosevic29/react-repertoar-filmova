import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppInfo from './AppInfo';
import AuthorInfo from './AuthorInfo';

function About() {
  return (
    <div className="about-page">
      <h2>O nama</h2>
      
      <nav className="about-nav">
        <Link to="/about/app">O aplikaciji</Link>
        <Link to="/about/author">O autoru</Link>
      </nav>

      <div className="about-content">
        <Outlet />
      </div>
    </div>
  );
}

export default About;