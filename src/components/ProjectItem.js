import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/theme';
import { SocialIcon } from 'react-social-icons';
const ProjectItem = ({ project }) => {
  const theme = useContext(ThemeContext);
  const {
    title,
    description,
    techStack,
    imageLarge,
    demoLink,
    githubLink,
  } = project;

  return (
    <div className={`project-item ${theme}`}>
      <img src={imageLarge} alt="" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p>{description}</p>
        <ul className="tech-stack">
          {techStack.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>

        <p>
          Check it out:&nbsp; <a href={demoLink}>Demo</a>
          <span> &nbsp;</span>
          <a href={githubLink}>Github</a>
        </p>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
