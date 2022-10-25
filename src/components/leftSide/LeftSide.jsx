import React from 'react';
import Education from './Education';
import Languages from './Languages';
import './leftSide.scss';
import Skills from './Skills';
import Social from './Social';

const skills = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'JavaScript',
  },
  {
    name: 'React',
  },
  {
    name: 'Scss',
  },
  {
    name: 'Figma',
  },
];

const education = [
  {
    name: 'stepik.org',
    title: 'Web development for beginners: HTML & CSS',
    date: '03/2022',
  },
  {
    name: 'freeCodeCamp.org',
    title: 'Responsive Web Design',
    date: '06/2022',
  },
  {
    name: 'freeCodeCamp.org',
    title: 'JavaScript Algorithms and Data Structures',
    date: '07/2022',
  },
  {
    name: 'freeCodeCamp.org',
    title: 'Front End Development Libraries',
    date: '07/2022',
  },
];

const social = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/karen-vardanian-061a97246/',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/KarVarr',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/WarKarWar',
  },
];

const languages = [
  {
    name: 'Armenian',
    level: 'Advanced',
  },
  {
    name: 'Russian',
    level: 'Advanced',
  },

  {
    name: 'English',
    level: 'Pre-intermediate',
  },
];

const LeftSide = () => {
  return (
    <div className='leftSide'>
      <div className='leftSide__education'>
        <p className='title'>Education</p>
        {education.map((item, i) => (
          <Education
            key={i}
            name={item.name}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
      <div className='leftSide__skills'>
        <p className='title'>Skills</p>
        {skills.map((item, i) => (
          <Skills key={i} skill={item.name} />
        ))}
      </div>
      <div className='leftSide__social'>
        <p className='title'>Social</p>
        {social.map((item, i) => (
          <Social social={item.name} link={item.link} />
        ))}
      </div>
      <div className='leftSide__languages'>
        <p className='title'>Languages</p>
        {languages.map((item, i) => (
          <Languages languages={item.name} level={item.level} />
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
