import "../SASS/about.scss";
import { profile } from "./import";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <main className="about">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Hi, My name is Muhammad, I'm a Front-end developer located in India I
          enjoy creating things that live on the internet. What excites me most
          about working in web development is being able to code and create
          things that have purpose and solve real problems. Leaning into
          customer research and insight, finding the right problems to solve,
          delivering that value as quickly as possible, learning from it and
          then iterating and improving that value over time is the key to great
          design.
          <span></span>I have no desire to make things just for the sake of it.
          I only want to make, design or build ideas and products that matter
          and have a positive impact in the world.
        </p>
      </div>
      <div className="about-img">
        <img src={profile} alt="profile" className="profile" />
        <div className="social-links">
          <a
            href="https://github.com/tehseen01"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://instagram.com/tehseen.01"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://codepen.io/codebytehseen"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
