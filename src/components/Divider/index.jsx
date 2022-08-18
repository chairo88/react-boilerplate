import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

const Divider = ({ className }) =>{ 
  const dividerClasses = classNames('divider', {
    className
  });
  return (
    <div className={dividerClasses} />
  );
};

Divider.propTypes = {
  className: propTypes.string,
};

Divider.defaultProps = {
  className: ''
};
export default Divider;
