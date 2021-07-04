import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import { ThemeProvider } from './context/theme';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={`container ${theme}`}>
          <Nav toggleTheme={toggleTheme} theme={theme} />
          <Route exact path="/" component={Home} />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
