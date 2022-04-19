import React from 'react'

export default function OTPFeed({
    input,
    handleChange,
    index
}) {
  return (
    <input className={"w-10 text-white bg-transparent border-2 text-center rounded-lg"} type="text" maxLength={1} onChange={(e) => {handleChange(e, index)}} value={input}/>
  )
}
