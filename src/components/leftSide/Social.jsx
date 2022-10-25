import React from 'react';

const Social = ({ social, link }) => {
  return (
    <div>
      <div className='social__box'>
        <div className='box--dot'>●</div>
        <a href={link} target='_blank' rel='noreferrer noopener'>
          {social}
        </a>
      </div>
    </div>
  );
};

export default Social;
