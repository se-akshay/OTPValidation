import React from "react";

const OTPInput = ({ value, onChange, onKeyDown, inputRef }) => {
  return (
    <input
      type="text"
      value={value}
      ref={inputRef}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="otp-input"
    />
  );
};

export default OTPInput;
