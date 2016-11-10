import React from 'react';

import Dice from './dice.js';

export default ({board}) => {

  const letters = board.map(({letter, active}, i) => {
  	// pull out active bool here and pass to letter
  	return <Dice key={i} value={letter} active={active}/>;
  })
  return(
    <div className='board'>
      {letters}
    </div>
  )
}