import React from "react";
import "../SASS/home.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <main className="home">
        <h1>Muhammad Tehseen</h1>
        <h2>Front-end web developer</h2>
        <p>I design and code beautifull simple things, and I love what I do.</p>

        <Link to="/work" className="btn">
          Projects
        </Link>
      </main>
    </>
  );
};

export default Home;
