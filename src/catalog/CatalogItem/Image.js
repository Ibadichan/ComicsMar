import React from 'react';

function Image({ src, width, height, alt }) {
  return (
    <p className='catalog-item-image'>
      <img src={src} width={width} height={height} alt={alt} />
    </p>
  );
}

export default Image;
