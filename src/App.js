import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[text, setText] = useState('');

  // variation -> 1 every dependencies
  // useEffect( () => {
  //    console.log("UI rendered");
  // });
  
  // variationn -> 2 on first dependency
  // useEffect( () =>{
  //   console.log("UI rendered")
  // }, []);

  //variation -> 3 on first render + whenever dependencies change

  // useEffect( ()=>{
  //   console.log("text")
  // },[text]);


  //variation -> 4 to handle unmounting of an event
  useEffect( ()=>{
    //add event listener
    console.log("listener added");

    return() => {
      console.log("Listener removed");
    }
  }, []);
  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
     <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
