import React from 'react';

// const contacts = [
//   {
//     name: 'P',
//     info: '+7 (999) 987 87 13',
//   },
//   {
//     name: 'E',
//     info: 'megatr9n@gmail.com',
//   },
//   {
//     name: 'T',
//     info: '@karenvardanian',
//   },
// ];

const Contact = ({ name, info }) => {
  return (
    <div className='contact--info'>
      <span>{name}</span>
      <span>{info}</span>
    </div>
  );
};

export default Contact;
