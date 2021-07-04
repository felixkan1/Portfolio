import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import PropTypes from 'prop-types';
import resumePdf from '../data/felixResume.pdf';

const Nav = ({ toggleTheme, theme }) => {
  return (
    <div className="nav-bar">
      <div>Felix Kan</div>
      <nav>
        {/* <NavLink to="/about" activeClassName="chosen">
          about{' '}
        </NavLink> */}
        <a href={resumePdf} target="_blank" rel="noreferrer">
          resume
        </a>
        <DarkModeSwitch
          style={{
            position: 'relative',
          }}
          checked={theme === 'dark'}
          onChange={toggleTheme}
          size={15}
        />
      </nav>
    </div>
  );
};

Nav.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Nav;
