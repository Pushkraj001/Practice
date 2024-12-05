import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [currDate, setcurrDate] = useState(new Date());

 useEffect(() =>{
 setInterval(()=>{
    setcurrDate(new Date());
  },1000);
 },[]);

  return (
    <>
     <h1>Hello World</h1>
     <p>It is {currDate.toLocaleTimeString()}</p>
    </>
  )
}

export default App
