import React from 'react';

const Education = ({ name, title, date }) => {
  return (
    <div>
      <div className='education__box'>
        <div className='box--dot'>●</div>
        <div className='box--info'>
          <p className='name'>{name}</p>
          <p className='title--info'>{title}</p>
          <p className='date'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
