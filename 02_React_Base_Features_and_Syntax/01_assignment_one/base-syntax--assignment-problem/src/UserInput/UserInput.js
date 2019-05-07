import React from 'react';


const userInput = (props) => {
  const style = {
    width: '15%',
    margin: '5px 400px',
    border: '1px solid #1aa',
    boxShadow: '0 3px 2px #ccc',
    padding: '2px',
    textAlign: 'center'
  }

  return(
    <div className='UserInput'>
      <input type="text" onChange={props.edit} value={props.username} style={style}/>
    </div>
  )
}

export default userInput;
