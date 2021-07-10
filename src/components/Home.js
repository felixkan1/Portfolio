import React, { Fragment } from 'react';
import { SocialIcon } from 'react-social-icons';
import profile from '../images/profile.jpeg';
import { IoIosArrowDown } from 'react-icons/io';
import { projects } from '../data/projects';
import ProjectItem from './ProjectItem';

const Home = () => {
  return (
    <Fragment>
      <h1>Hi there!</h1>
      <p className="intro-description">
        I'm a Full Stack Developer and graduate from the University of Toronto
        Engineering
      </p>
      <div className="intro-container">
        <img src={profile} alt="" className="profile-pic"></img>
        <ul className="social-buttons">
          <li className="social-icon">
            <SocialIcon url="https://www.linkedin.com/in/felix-kan-3538a7b3/" />
          </li>
          <li className="social-icon">
            <SocialIcon
              url="https://github.com/felixkan1"
              fgColor={'white'}
              bgColor={'dark'}
            />
          </li>
        </ul>
      </div>
      <div className="divider">
        <IoIosArrowDown size={50} />
      </div>
      <div className="projects"></div>
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
      <div className="projects"></div>
    </Fragment>
  );
};

export default Home;
