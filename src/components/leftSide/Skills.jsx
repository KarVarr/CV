import React from 'react';

const Skills = ({ skill }) => {
  return (
    <div>
      <div className='skills__box'>
        <div className='box--dot'>●</div>
        <div className='box--title'>{skill}</div>
      </div>
    </div>
  );
};

export default Skills;
