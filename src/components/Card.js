import React from 'react';
import Profile from '../assets/image/profile.png';

const Card = () => {
  return (
    <div className='card'>
      <div className='content'>
        <div className='imgText'>
          <div className='imgBox'>
            <img src={Profile} alt='profile' />
          </div>
          <h3>
            Ashish Kashyap
            <br />
            <span>Developer</span>
          </h3>
          <ul className='icons'>
            <li>
              <a href='/'>
                <i className='fa fa-facebook-f'></i>
              </a>
            </li>
            <li>
              <a href='/'>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='/'>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
