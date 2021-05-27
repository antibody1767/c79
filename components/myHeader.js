import React from "react";
import {Header} from "react-native-elemants"

export default class MyHeader extends React.Component{
    render(){
        return(
            <Header 
            backgroundColor= "navy"
            centerComponent={{
                text:"Book Santa",
                style:{
                    color:"white",
                    padding:20,
                }
            }}/>
        )
    }
}