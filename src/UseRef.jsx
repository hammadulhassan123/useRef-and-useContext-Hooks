import React from 'react'
import { useState,useRef,useEffect } from 'react'

const UseRef = () => {
    const [name, setName] = useState('')
    const prevName = useRef('')
    // const ref = useRef(initial value)
  
  // function focus(){
  //  inputRef.current.focus()
  //  inputRef.current.value = "Some Value"
  //  appendChild
  // }
  
  useEffect(()=>{
    prevName.current = name}, [name]
  )
  
  
    return (
     <>
     <div className="App">
          {/* <input ref={inputRef} value={(name)} onChange={e => setName(e.target.value)}/> */}
          <input value={(name)} onChange={e => setName(e.target.value)}/>
          <div>My name is {name} and it used to be {prevName.current}</div>
          {/* <button onClick={focus}>FOCUS</button> */}
      </div> </>
    )
}

export default UseRef