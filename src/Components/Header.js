import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer, Menu } from 'antd';
import { IoIosLogOut } from 'react-icons/io';

// Menu items with routing
const items = [
  {
    key: 'sub0',
    label: <Link to='/'>Home</Link>,
  },
  {
    key: 'sub1',
    label: 'Product',
    children: [
      {
        key: '231',
        label: <Link to='/products'>First Product</Link>,
      },
      {
        key: '232',
        label: <Link to='/products'>Second Product</Link>,
      },
      {
        key: '233',
        label: <Link to='/products'>Third Product</Link>,
      },
    ],
  },
  {
    key: 'sub2',
    label: <Link to='/about'>About Us</Link>,
  },
  {
    key: 'sub3',
    label: <Link to='/blog'>Blog</Link>,
  },
  {
    key: 'sub4',
    label: <Link to='/contact'>Contact Us</Link>,
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='container'>
      <Drawer
        placement={'left'}
        width={250}
        onClose={onClose}
        open={open}
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src='https://www.mrengineeringworks.in/images/logo.jpg'
              className='w-50 h-50'
              alt='logo'
            />
          </div>
        }
      >
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <Menu
              onClick={onClick}
              style={{
                width: 200,
              }}
              mode='inline'
              items={items}
              className='custom-menu'
            />
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              width: '90%',
              paddingBottom: '20px',
              backgroundColor: '#fff',
              padding: '10px',
              textDecoration: 'none',
            }}
          >
            <button
              className='d-flex align-items-center gap-2 rounded-2'
              style={{
                border: 'none',
                width: '100%',
                fontSize: '18px',
                padding: '10px',
              }}
            >
              <IoIosLogOut style={{ width: '22px', height: '22px' }} />
              Logout
            </button>
          </div>
        </div>
      </Drawer>
      <div className='header' id='myHeader'>
        <div className='header-logo'>
          <a href='/'>
            <h1 className='pt-2'>
              <img
                src='https://www.mrengineeringworks.in/images/logo.jpg'
                alt='logo/img'
              />
            </h1>
          </a>
        </div>
        <div className='header-menu'>
          <div className='dropdown  border-0 bg-white '>
            <button
              className='btn btn-secondary dropdown-toggle border-0 bg-white text-primary fw-bolder  '
              type='button'
              id='dropdownMenuButton'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Products
            </button>
            <div
              className='dropdown-menu border-0 bg-white '
              aria-labelledby='dropdownMenuButton'
            >
              <Link className='dropdown-item' to='/products'>
              All Products
              </Link>
            </div>
          </div>

          <Link to='/about' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              About us
            </div>
          </Link>
          <Link to='/blog' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Blog
            </div>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Contact Us
            </div>
          </Link>
        </div>
        <div className='header-search'>
          <form className='example' action='action_page.php'>
            <input
              className='header-searchbar'
              type='text'
              placeholder='Search..'
              name='search'
            />
            <button className='header-search-button' type='submit'>
              Search
            </button>
          </form>
        </div>
        <div className='hamburger-icon'>
          <RxHamburgerMenu
            style={{ width: '25px', height: '25px', marginTop: '15px' }}
            onClick={showDrawer}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
