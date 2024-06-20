import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartIcon from '../../assets/cart.png';
import UserAvatar from '../../assets/user_avatar.png';
import { MdClose, MdMenu } from 'react-icons/md';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'text-yellow-500 hover:text-yellow-500'
            : 'hover:text-yellow-500'
        }
      >
        Home
      </NavLink>
      <NavLink
        to='/contact-us'
        className={({ isActive }) =>
          isActive
            ? 'text-yellow-500 hover:text-yellow-500'
            : 'hover:text-yellow-500'
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to='/dashboard'
        className={({ isActive }) =>
          isActive
            ? 'text-yellow-500 hover:text-yellow-500'
            : 'hover:text-yellow-500'
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/menu'
        className={({ isActive }) =>
          isActive
            ? 'text-yellow-500 hover:text-yellow-500'
            : 'hover:text-yellow-500'
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to='/shop'
        className={({ isActive }) =>
          isActive
            ? 'text-yellow-500 hover:text-yellow-500'
            : 'hover:text-yellow-500'
        }
      >
        Our Shop
      </NavLink>
      <NavLink to='/cart'>
        <img src={CartIcon} alt='Shopping Cart Icon' className='h-6 w-6' />
      </NavLink>
      <NavLink
        to='/sign-out'
        className='hover:text-yellow-500 font-bold uppercase'
      >
        Sign Out
      </NavLink>
      <NavLink to='/profile'>
        <img
          src={UserAvatar}
          alt='User Avatar'
          className='size-8 rounded-full'
        />
      </NavLink>
    </>
  );

  return (
    <div className='bg-black text-white'>
      <div className='flex justify-between items-center py-4 px-4 md:px-2'>
        <div className='text-2xl font-bold flex flex-col gap-1'>
          <Link
            to='/'
            className='btn btn-ghost flex w-52 gap-1 font-cinzel font-black text-left  normal-case text-xl'
          >
            BISTRO BOSS <br />{' '}
            <span className='font-bold tracking-widest'>Restaurant</span>
          </Link>
        </div>
        <div className='hidden md:flex space-x-4 font-inter uppercase md:font-medium lg:font-bold'>
          {navLinks}
        </div>
        <div className='md:hidden flex items-center'>
          <button
            className='text-white focus:outline-none'
            onClick={handleToggle}
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? (
              <MdClose className='text-2xl' />
            ) : (
              <MdMenu className='w-6 h-6' />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden font-inter uppercase font-medium flex flex-col items-center space-y-4 mt-4 pb-4'>
          {navLinks}
        </div>
      )}
    </div>
  );
};

export default Navbar;
