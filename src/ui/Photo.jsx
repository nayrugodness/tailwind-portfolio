import React from 'react';
import Nayru from '../../src/images/Nayru.jpeg';

export const Photo = () => {
  return (
    <img className='w-50 h-60 rounded-full hover:rounded-none border-4' src= {Nayru}  alt="Homer Simpsons" />
  )
}