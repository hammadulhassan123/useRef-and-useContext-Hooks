import React,{ useState,useContext } from "react";

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext);
}
// two custom hooks
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export default function ThemeProvider ({children}) {
    const [darkTheme, setDarkTheme]= useState(true)

    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }
    // toggleTheme is used for updating our context
    return(
        <ThemeContext.Provider value ={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>

            {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}