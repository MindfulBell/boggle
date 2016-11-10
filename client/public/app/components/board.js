import React from 'react';

import Dice from './dice.js';

export default ({board, validWordIndeces}) => {
  console.log(validWordIndeces)
  const letters = board.map(({letter}, i) => {
  	// pull out active bool here and pass to letter
  	return <Dice key={i} value={letter} active={validWordIndeces.includes(i)}/>;
  })
  return(
    <div className='board'>
      {letters}
    </div>
  )
}