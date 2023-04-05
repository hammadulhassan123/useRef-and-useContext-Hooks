import React, { useContext } from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'



const FunctionContextComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles={
    backgroundColor: darkTheme ? '#646cffaa' : "#61dafbaa",
    color: darkTheme ? "#CCC" : "#333",
    padding: '2rem',
    margin: '2rem',

}
    return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <br />
    <div styles={themeStyles}>Function Theme</div>
     </>
  )
}

export default FunctionContextComponent