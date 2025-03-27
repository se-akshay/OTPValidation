import React, { useState, useEffect, useRef } from "react";
import OTPInput from "./OTPInput";

const OTPDigit_Count = 6;

const OTPForm = () => {
  const [inputArr, setInputArr] = useState(new Array(OTPDigit_Count).fill(""));
  const refArr = useRef(new Array(OTPDigit_Count).fill(null));

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newArr = [...inputArr];
      if (newArr[index]) {
        newArr[index] = "";
        setInputArr(newArr);
      } else if (index > 0) {
        newArr[index - 1] = "";
        setInputArr(newArr);
        refArr.current[index - 1]?.focus();
      }
    }
    if (e.key === "ArrowLeft" && index > 0) {
      refArr.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < OTPDigit_Count - 1) {
      refArr.current[index + 1]?.focus();
    }
    if (e.key === "Enter") {
      console.log("Entered OTP: ", inputArr.join(""));
    }
  };

  return (
    <div className="otp-container">
      {inputArr.map((input, index) => (
        <OTPInput
          key={index}
          value={input}
          inputRef={(el) => (refArr.current[index] = el)}
          onChange={(e) => handleOnChange(e.target.value, index)}
          onKeyDown={(e) => handleOnKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OTPForm;
