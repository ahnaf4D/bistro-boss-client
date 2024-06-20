import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        const popularItems = data.filter((item) => item.category === 'popular');
        setMenu(popularItems);
      });
  });
  return (
    <div>
      <SectionTitle
        heading='FROM OUR MENU'
        massage={'Check it out'}
      ></SectionTitle>
      {loading && (
        <div className='flex justify-center'>
          <span className='loading loading-bars loading-lg text-error'></span>
        </div>
      )}
      <div className='grid grid-cols-1 mx-auto container py-4 md:grid-cols-2 gap-4'>
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className='flex items-center justify-center my-4 '>
        <button className='btn btn-ghost font-inter border-b-4 border-b-black uppercase text-xl '>
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
