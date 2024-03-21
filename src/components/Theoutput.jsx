import React, { Component } from "react";
import TextLength from "./TextLength";
import TheTextLength from "./TheTextLength";

class TheOutput extends Component {

  state = {
    Thetext: { text: ""}
  }

  textChangeEventListener (event) {
    this.setState({
          Thetext: 
            { text:event.target.value}
        })
  }

  changeVal = ()=>{
    this.textChangeEventListener(event)
    }

  render() {
    const {Thetext:{text}} = this.state
    const length = text.length;
    //function for the text too short or long 
    const long = ()=>{
        if (length <=5) {
            return "Text too short";
        }
        if (length <= 19) {
            return "Text is fine"
        }
        if (length >=20){
            return "Text too long"
        }
    }
   

    return (
      <>
        <TextLength
        changeValue = {this.changeVal}
            textOutput={text} >
        </TextLength>
        <TheTextLength long={long()} theLength={length}>Text Length is:
        </TheTextLength>
            
      </>
    )
  }
}





export default TheOutput;
