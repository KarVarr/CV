import React from 'react';

const QrCode = ({title,img}) => {
  return (
    <div className='box'>
      <div className='box__title'>{title}</div>
      <div className='box__img'>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default QrCode;
