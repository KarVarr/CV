import React from 'react';
import './rightSide.scss';

const RightSide = () => {
  return (
    <div className='rightSide'>
      <p className='rightSide__helloText'>
        <span className='title'>Hi,i'm Karen </span>- a Front-End Developer from
        Moscow.
        <br /> i am looking for a job as a junior Front-End developer in a
        friendly team!
        <br />
        I'm interested in web development and everything connected with it. I
        have taken web development courses and continue my education and
        improvement. <br />
        Ready to implement excellent projects with wonderful people.
      </p>
      <div className='rightSide__project'>
        <h3 className='title'>Project Experience</h3>
        <div className='project__box'>
          <div className='box__link'>
            <a
              href='https://karvarr.github.io/ParallaxPortfolio/'
              target='_blank'
              rel='noopener noreferrer'
            >
              My portfolio
            </a>
            For my stydies i used HTML/CSS/SCSS/JS/React JS/React
            Native/BEM/Responsive layout/Mobile layout/Flexbox/Pixel Perfect.
            <br/>
            There are all my projects in section "Portfolio" and link to the certificates!
          </div>
          <div className='box__qrCode'>qrCode img</div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
