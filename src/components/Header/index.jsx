import React from 'react';
import { Link } from 'react-router-dom';

import wordings from './wordings';

const Header = () => (
  <div>
    <Link className='header__link' to='/'>
      <h1 className='header__title'>
        {wordings.title}
      </h1>
    </Link>
    <div className='header__divider' />
  </div>
);

export default Header;
