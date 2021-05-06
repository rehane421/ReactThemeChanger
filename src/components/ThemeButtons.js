import React from 'react';

const ThemeButtons = ({ handleThemeClick, theme }) => {
  return (
    <div className='button-container'>
      <div className='theme-options'>
        <div id='text'>
          <p>Select a theme</p>
        </div>
        <div
          id='white-theme'
          className={`${theme === 'white-theme' ? 'active' : ''}`}
          onClick={handleThemeClick('white-theme')}
        ></div>
        <div
          id='sky-theme'
          className={`${theme === 'sky-theme' ? 'active' : ''}`}
          onClick={handleThemeClick('sky-theme')}
        ></div>
        <div
          id='blue-theme'
          className={`${theme === 'blue-theme' ? 'active' : ''}`}
          onClick={handleThemeClick('blue-theme')}
        ></div>
        <div
          id='orange-theme'
          className={`${theme === 'orange-theme' ? 'active' : ''}`}
          onClick={handleThemeClick('orange-theme')}
        ></div>
        <div
          id='purple-theme'
          className={`${theme === 'purple-theme' ? 'active' : ''}`}
          onClick={handleThemeClick('purple-theme')}
        ></div>
        <div
          id='green-theme'
          className={`${theme === 'green-theme' ? 'active' : ''}`}
          onClick={handleThemeClick('green-theme')}
        ></div>
        <div
          id='dark-theme'
          className={`${theme === 'dark-theme' ? 'active' : ''}`}
          onClick={handleThemeClick('dark-theme')}
        ></div>
      </div>
    </div>
  );
};
export default ThemeButtons;
