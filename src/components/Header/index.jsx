import React from 'react';

import wordings from './wordings';

const Header = () => (
  <div>
    <a className='header__link' href='/'>
      <h1 className='header__title'>
        {wordings.title}
      </h1>
    </a>
    <div className='header__divider' />
  </div>
);

export default Header;
