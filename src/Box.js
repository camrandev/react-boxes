import React from 'react';

const Box = ({width='100px', height='100px', backgroundColor='red'}) => {
  const myStyles = {
    width,
    height,
    backgroundColor,
  }


  return (
    <div style={myStyles}>
      <h3>Box</h3>
    </div>
  )
}

export default Box;