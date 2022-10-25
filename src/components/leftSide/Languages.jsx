import React from 'react'

const Languages = ({ languages, level }) => {
  return (
    <div>
      <div className='languages__box'>
        <div className='box--dot'>●</div>
        <div className='box--info'>
          <p className='info__languages'>{languages}</p>
          <span>-</span>
          <p className='info__level'>{level}</p>
        </div>
      </div>
    </div>
  );
};

export default Languages