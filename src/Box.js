import React from 'react';

const Box = ({id, width='100px', height='100px', backgroundColor='red', removeBox}) => {
  const myStyles = {
    width:`${width}px`,
    height:`${height}px`,
    backgroundColor,
    border: "1px solid black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }


  return (
    <div style={myStyles}>
      <button onClick={()=>removeBox(id)}>X</button>
    </div>
  )
}

export default Box;