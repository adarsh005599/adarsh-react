import './index.css'
function App() {
  // const [count, setCount] = useState(0)
  // function Clickfun(){
  //   alert ("hacker hai bhai hacker☠️☠️")
  // }
  

  return (
    <div >
      <form onSubmit ={(e) => {e.preventDefault(); alert('Form Submit done');}}>
      <input type='text' onChange= {(e) => {console.log('value Enterd till now: ', e.target.value)}}/>
      <button type = 'Submit' >Submit</button>
      </form> 
      {/* <h3 onMouseOver={()=> {alert('hacked hacked🥲🥲')}}>
        Hello Adarsh! </h3>
     <button onClick = {Clickfun}>
      Click  Me
       
     </button> */}
    </div>
  )
}

export default App;
