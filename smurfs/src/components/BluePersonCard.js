import React, { useContext } from 'react';

import { SmurfContexts } from '../contexts/SmurfContexts';

function BluePersonCard() {
  const smurfPerson = useContext(SmurfContexts);

  console.log(smurfPerson)

  return (
    <div>
      {/* {smurfPerson.map(smurf => (<h1>{smurf.name}</h1>))} */}
    </div>
  )
};

export default BluePersonCard;
