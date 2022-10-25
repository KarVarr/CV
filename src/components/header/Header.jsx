import React from 'react';
import './header.scss';
import img from '../../image/Karen.webp';
import Contact from './Contact';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__contact'>
        <Contact name={'P'} info={'+7 (999) 987 87 13'} />
        <Contact name={'E'} info={'megatr9n@gmail.com'} />
        <Contact name={'T'} info={'@karenvardanian'} />
      </div>
      <div className='header__img'>
        <img src={img} alt='img' />
      </div>
      <div className='header__name'>
        <h1>
          <span>Karen</span>
          <br /> Vardanian
        </h1>
        <h2>Front-End developer</h2>
      </div>
    </div>
  );
};

export default Header;
