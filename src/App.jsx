import React from 'react'
// import UseRef from './UseRef'
import FunctionContextComponent from './FunctionContextComponent'
import ThemeProvider from './ThemeContext'
import "./App.css"

function App() {
 
  return(
    <>
   
     {/* <UseRef/> */}
        <ThemeProvider>
          <FunctionContextComponent/>
        </ThemeProvider>
    </>



  )


}

export default App
