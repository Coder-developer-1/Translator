import { useEffect, useState } from 'react'
// import axios from 'axios'
import './App.css'

function App() {
 const [to ,setTo] = useState("");
 const [from ,setFrom] = useState("");
 const [input ,setInput] = useState("");
 const [outpup ,setOutput] = useState("");
 const [ooptions , setOoptions] = useState("")

 useEffect(() => {
    fetch("https://libretranslate.com/languages" , 
    {headers : {"Accept" : "application/json" } }).then((res) => console.log(res))

  }
  )
  

  return (
    <>
    <div className="container">
      <div>
      From :
        <select >
         {ooptions.map((elm , i) => {
          return <option value={elm.code} key={i} > {elm.name} </option>} ) }
        </select>

        To:
        <select >
        {ooptions.map((elm , i) => {return <option value={elm.code} key={i} > {elm.name} </option>} ) }
        </select>
        </div> 

        <div>
          <textarea cols="100" rows="10"></textarea>
        </div>

        <div>
          <textarea cols="100" rows="10"></textarea>
        </div>

        <div>
          <button>Translate</button>
        </div>

      </div>
   
    </>
  )
}

export default App
