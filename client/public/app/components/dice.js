import React from 'react';
import classNames from 'classnames';

export default ({value, active}) => {
  const Cls = classNames('letter', {'activeLetter': active})
  return <div className={Cls}>{value}</div>
}