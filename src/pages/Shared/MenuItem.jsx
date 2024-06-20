import React from 'react';

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className='flex gap-2'>
      <img
        height='100'
        width='80'
        style={{ borderRadius: '0 50% 50%' }}
        src={image}
        alt=''
      />
      <div>
        <h3 className='flex justify-between'>
          <span className='font-cinzel text-2xl uppercase'>{name}</span>
          -----------
          <span className='text-[#BB8506] text-xl font-inter'>${price}</span>
        </h3>
        <p className='max-w-sm font-inter text-[#737373]'>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
