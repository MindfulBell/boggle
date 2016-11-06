import React from 'react';

import Dice from './dice.js';

export default ({board}) => {
  const items = board.map((letter) => <Dice key={letter} value={letter} />)
  return(
    <div>
      {items}
    </div>
  )
}