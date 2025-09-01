import { createContext, useState } from 'react';
import runGeminiPrompt from "../Config/gem.js"

export const AppContext = createContext();

const ContextProvider = ({ props}) => {
  const onSent = async (prompt) =>{
      await runGeminiPrompt(prompt)
  }
  onSent("what is react js")

  const Contextvalue  = {

  }

  return (
    <Context.Provider value={Contextvalue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
