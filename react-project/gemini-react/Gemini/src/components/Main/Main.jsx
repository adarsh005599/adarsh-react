import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react';
import { runGeminiPrompt } from '../../Config/gem';
import { AppContext } from '../../Context/Context'; 

export const Main = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

     const { chatHistory, setChatHistory } = useContext(AppContext); // 👈 Use it

  const handleSend = async () => {
  if (!prompt.trim()) return;

  console.log("Prompt sent:", prompt); // ✅ Check this log

  const result = await runGeminiPrompt(prompt);

  console.log("Response received:", result); // ✅ Check this log

  setResponse(result);
  setPrompt('');
};



  return (
    <div className='Main'>
       <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}/>
       </div>
       <div className="Main-container">
        <div className="greet">
            <p> <span>Hello, User.</span></p>
            <p>How can i help you today?</p>
        </div>
        <div className="cards">

            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon}/>
            </div>
        
            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon}/>
            </div>  
        
            <div className="card">
                <p>BrainStroming team binding activities for our work retreat</p>
                <img src={assets.message_icon}/>
            </div>
            <div className="card">
                <p>Improve the readiblity of the following code</p>
                <img src={assets.code_icon}/>
            </div>
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type ='text' placeholder='Enter a prompt hear'/>
                <img src={assets.gallery_icon}/>
                <img src={assets.mic_icon}/>
                <img
                     src={assets.send_icon}
                     alt="send"
                     onClick={handleSend}
                />

            </div>
            <p className="bottom-info">
                Gemini could be wrong, including about peoples, so always verify by your self.
            </p>
        </div>
        </div>
            {response && (
  <div className="response-box">
    <strong>Gemini:</strong>
    <p>{response}</p>
  </div>
)}

       </div>
    
  )
}
export default Main
