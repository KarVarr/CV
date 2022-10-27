import React from 'react';
import './rightSide.scss';

// import qrPortfolio from '../../../public/image/qr-codePortfolio.gif';
// import qrLinkedIn from '../../image/qr-codeLinkedIn.gif';
// import qrGitHub from '../../image/qr-codeGitHub.gif';
// import qrTwitter from '../../image/qr-codeTwitter.gif';
// import qrTelegram from '../../image/qr-codeTelegram.png';

import QrCode from './QrCode';

const date = new Date().getFullYear();

const qr = [
  {
    title: 'GitHub',
    img: 'image/qr-codeGitHub.gif',
  },
  {
    title: 'LinkedIn',
    img: 'image/qr-codeLinkedIn.gif',
  },
  {
    title: 'Telegram',
    img: 'image/qr-codeTelegram.png',
  },
  {
    title: 'Twitter',
    img: 'image/qr-codeTwitter.gif',
  },
];

const RightSide = () => {
  return (
    <div className='rightSide'>
      <p className='rightSide__helloText'>
        <div className='helloText__title--box'>
          <span className='title'>Hi,I'm Karen </span>- a Junior Front-End
          Developer from Moscow.
        </div>
        <br /> I am looking for a job as a junior Front-End developer in a
        friendly team!
        <br />
        I'm interested in web development and everything connected with it. I
        have taken web development courses and continue my education and
        improvement. <br />
        Ready to implement excellent projects with wonderful people.
      </p>
      <div className='rightSide__project'>
        <div className='project__title--box'>
          <h3 className='title'>Project Experience</h3>
          <span> - </span>
          <a
            href='https://karvarr.github.io/ParallaxPortfolio/'
            target='_blank'
            rel='noopener noreferrer'
          >
            My portfolio
          </a>
        </div>
        <div className='project__box'>
          <p className='box__link'>
            For my studies I used HTML / CSS / SCSS / JS / ReactJS/React Native
            / BEM / Responsive layout / Mobile layout / Flexbox / Pixel Perfect.
            <br />
            There are all my projects in section "Portfolio" and link to the
            certificates!
            <p className='date'>02/2022 - Until now</p>
          </p>
          <div className='box__qrCode'>
            <img src='image/qr-codePortfolio.gif' alt='QrCode' />
          </div>
        </div>
      </div>
      <div className='rightSide__work'>
        <div className='work__title--box'>
          <h3 className='title'>Work Experience</h3>
          <span>-</span>
          <div className='company'>PepsiCo: Logistician</div>
        </div>
        <div className='work__box'>
          <p>
            Worked in SAP, introduced reports in Excel. Daily communication with
            sales managers, drivers, management. Route control. Communication
            with the warehouse and billing department. The number of drivers is
            from 70. Thanks to the internal program "Eureka", improved the
            safety of work on the road for drivers and on the internal site of
            the entire warehouse.
            <p className='date'>2017 - {date}</p>
          </p>
        </div>
      </div>

      <div className='rightSide__work'>
        <div className='work__title--box'>
          <h3 className='title'>Work Experience</h3>
          <span>-</span>
          <div className='company'>Megapolis: Logistician</div>
        </div>
        <div className='work__box'>
          <p>
            Routing compilation. Calculation and billing of invoices for ordered
            transport from other transport companies through SAP. Calculation of
            logistics costs. Training new dispatchers to work. Worked with 60
            drivers. Replaced the deputy head of logistics doing his job.
            <p className='date'>2011 - 2017</p>
          </p>
        </div>
      </div>

      <div className='rightSide__qrCode'>
        <div className='title'>QR Code</div>
        <div className='qrCode__box'>
          {qr.map((item, i) => (
            <QrCode key={i} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
