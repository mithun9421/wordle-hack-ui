import React, {useState, useRef, useEffect} from 'react';
import OTPFeed from './OTPFeed';
import PropTypes from 'prop-types';

const getInitialArrayState = (length) => {
  return Array(length).fill('');
}

export default function OTPWrapper({
  length = 1,
  handleChange,
  value
}) {
  const [otpInput, setOTPInput] = useState(getInitialArrayState(length));
  const inputRef = useRef([]);

  const handleOtpChange = (event, index) => {
    let items = [...otpInput];
    items[index] = event?.target?.value;
    setOTPInput(items)
  }

  useEffect(() => {
    handleChange(otpInput)
  }, [otpInput])

  return (
    <div className="otp-wrapper w-full flex justify-between items-center py-2">
      {
        otpInput?.map((singleInput, index) => {
          return (
            <OTPFeed
              key={index}
              index={index}
              input={singleInput}
              handleChange={handleOtpChange}
            />
          )
        })
      }
    </div>
  )
}

OTPWrapper.propTypes = {
  length: PropTypes.number.isRequired,
}