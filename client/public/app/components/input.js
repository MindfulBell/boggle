import React, {Component} from 'react';

export default ({userInput, handleChange, handleSubmit}) => {

  const onChange = (e) => {
    handleChange(e.target.value);
  };

  const onSubmit = (e) => {
    handleSubmit(e.target.value);
  };

  return (
    <input
      type="text"
      value={userInput}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}