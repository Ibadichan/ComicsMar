import React from 'react';
import spinner from '../../../img/spinner.svg';

function Spinner() {
  return (
    <p className='spinner-loader'>
      <img src={spinner} width='150' height='150' alt='Spinner loader' />
      <b>Wait a few seconds please...</b>
    </p>
  );
}

export default Spinner;
