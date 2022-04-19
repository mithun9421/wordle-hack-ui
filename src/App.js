import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import WordFeeder from './components/WordFeeder';

function App() {
  const [matchedWords, setMatchedWords] = useState(null);
  const [wordSearchLoading, setWordSearchLoading] = useState(false);
  const [error, setError] = useState([]);

  const getErrorCodeResponse = (errCode) => {
    return "Error"
  }

  const getWords = async (inputObject) => {
    console.log("Input object ", inputObject)
    const { correctGuess, jumbledGuess, wrongGuess } = inputObject;
    let input = {
      correctGuess,
      jumbledGuess,
      wrongGuess
    }
    setMatchedWords([])
    setWordSearchLoading(true)
    let apiResponse = await axios.post("http://localhost:8000/getMatchingWords", input);
    apiResponse?.data?.status == 200 ? setMatchedWords(apiResponse?.data?.matchingWords) : setError(getErrorCodeResponse(apiResponse?.data?.status))
    setWordSearchLoading(false)
  }

  return (
    <div className="flex h-screen w-full items-center justify-center text-3xl font-bold text-blue-800 bg-very-dark-blue">
      <div className="flex flex-row">
        <div className="min-h-fit h-3/5 text-white bg-white bg-opacity-20 flex flex-col rounded-md pt-5 define-boundary">
          <div className="flex items-center justify-center">
            Wordle Hack
          </div>
          <WordFeeder
            getInput={getWords}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center define-boundary p-5 bg-white bg-opacity-10">
        <div className="flex items-center justify-center flex-col">
          {
            matchedWords?.length > 0 && !wordSearchLoading &&
            <h3 className="text-white text-lg">Suggested Words ({matchedWords.length})</h3>
          }
        <div className="mt-5 flex flex-row items-center justify-center h-48 overflow-y-auto flex-wrap">
          {matchedWords?.map((word, index) => {
            return (
              <div key={index} className="mx-1 my-2 border-2 px-2 py-1 rounded-lg  flex flex-row justify-center items-center cursor-pointer">
                <span className="text-sm text-white">{word}</span>
              </div>
            )
          })}
          {!wordSearchLoading && matchedWords?.length == null && 
            <div className="">
              <p className="text-sm font-light text-white">Please search to get the matching Words!</p>
            </div>
          }
            {matchedWords?.length == [] && !wordSearchLoading &&
            <div className="">
              <p className="text-sm font-light text-white">No Words matching the search!</p>
            </div>
          }
          {
            wordSearchLoading &&
            <div className="text-white text-sm">Getting Words</div>
          }
        </div>
        </div>
    
      </div>
    </div>
  );
}

export default App;


