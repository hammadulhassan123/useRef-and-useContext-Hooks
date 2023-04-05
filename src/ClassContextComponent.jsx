import React from "react";
import { Component } from "react";

import React from 'react'

class ClassContextComponent extends Component{
    themeStyles(dark){
        return{
            backgroundColor: darkTheme ? 'blue' : "red",
            color: darkTheme ? "#CCC" : "#333",
            padding: '2rem',
            margin: '2rem',
        }
    }

    render(){
        <ThemeContext.Consumer>
            {darkTheme =>{
                return <div style={this.themeStyles(darkTheme)}>
                        Class Tehme
                </div>
            }}
        
        </ThemeContext.Consumer>
    }
}

export default ClassContextComponent