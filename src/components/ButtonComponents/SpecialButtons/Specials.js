import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file

import SpecialButton from './SpecialButton'
import {specials} from '../../../data'

const Specials = () => {
  // STEP 2 - add the imported data to state
const [spcValue] = useState(specials)
  return (
    <div className='spcContainer'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {spcValue.map((special, i) => {
         return <SpecialButton key={i} specials={special}/>
       })}
    </div>
  );
};

export default Specials;