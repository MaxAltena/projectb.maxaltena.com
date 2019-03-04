import React from "react";

const Input = ({ size, type, id, value, onChange, name }) => {
  return (
    <div className={`input-field col s${size}`}>
      <input type={type} id={id} value={value} onChange={onChange} />
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export default Input;
