import React, {Component} from 'react';

export default ({userInput, handleChange, handleSubmit}) => {

  // const onChange = (e) => {
  //   handleChange(e.target.value);
  // };

  const onSubmit = (e) => {
    handleSubmit(e.target.value);
  };

  const handleKey = (e) => {
    handleChange(e.target.value, e.keyCode)
  }

  return (
    <input
      type="text"
      value={userInput}
      onKeyUp={handleKey}
      onSubmit={onSubmit}
    />
  )
}