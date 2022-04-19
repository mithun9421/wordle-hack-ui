import React, { useState } from 'react';
import CustomOTP from './CustomOTP'

export default function WordFeeder({
    getInput
}) {
    const [correctGuess, setCorrectGuess] = useState([]);
    const [jumbledGuess, setJumbledGuess] = useState([]);
    const [wrongGuess, setWrongGuess] = useState("");


    const handleCurrentGuessChange = (value) => {
        setCorrectGuess(value)
    }

    const handleJumbledGuessChange = (value) => {
        setJumbledGuess(value);
    }

    const handleGetWords = () => {
        let input = {
            correctGuess,
            jumbledGuess,
            wrongGuess
        }
        getInput(input)
    }

    const clearInput = () => {
        setCorrectGuess([]);
        setJumbledGuess([]);
        setWrongGuess("")
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-col mx-5 p-5 w-full">
                <div className="">
                    <div className="text-2xl">Correct Guess</div>
                    <div className="flex flex-row otp">
                        <CustomOTP
                            length={5}
                            handleChange={handleCurrentGuessChange}
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-2xl">Jumbled Guess</div>
                    <div className="flex flex-row otp">
                        <CustomOTP
                            length={5}
                            handleChange={handleJumbledGuessChange}
                        />
                    </div>
                </div>
                <div className="mt-5">
                    <div className="text-2xl">Wrong Guesses</div>
                    <div className="flex flex-row otp">
                        <input type="text" className="bg-transparent border-2 rounded-lg p-2" onChange={(e) => {setWrongGuess(e.target.value)}}/>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex items-center justify-center">
                        <button type="button" className="text-2xl bg-white px-7 py-4 rounded-2xl text-slate-800" onClick={handleGetWords}>Get Words</button>
                        {/* <button type="button" className="text-2xl bg-transparent px-7 py-4 rounded-2xl text-white" onClick={clearInput}>Clear</button> */}
                    </div>
                </div>

            </div>
       
        </div>
    )
}
