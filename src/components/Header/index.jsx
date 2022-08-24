import React from 'react';
import { Link } from 'react-router-dom';
import BounceLoader from 'react-spinners/BounceLoader';
import { useAppContext } from '../../context/app';

import wordings from './wordings';

const headerLoaderColor = '#418EFF';

const Header = () => {
  const { isLoading } = useAppContext();
  return (
    <>
      <div className='header__container'>
        <Link className='header__link' to='/'>
          <h1 className='header__title'>
            {wordings.title}
          </h1>
        </Link>
        <BounceLoader 
          className='header__loader'
          loading={isLoading} 
          color={headerLoaderColor}
        />
      </div>
      <div className='header__divider' />
    </>
  );
};

export default Header;
