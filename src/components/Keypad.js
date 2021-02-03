// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  render(){
    return (
      <input
        onKeyUp={() => {console.log('Entering password...')}}
        type="password">
      </input>
    )
  }
}

export default Keypad