import React,{useState} from 'react'

export default function TextForm(props) {

    //code for upperCase 
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked " + text);
        let newValue = text.toUpperCase();
        setText(newValue)
        props.showAlert("Converted to UpperCase!","success");
    }


    // Code for lowerCase
    const handleLoClick = ()=>{
        console.log("LowerCase was clicked " + text);
        let newValue = text.toLowerCase();
        setText(newValue)
        props.showAlert("Converted to LowerCase!","success");
    }


    // Copy
    const handleCopy=()=>{
        console.log("Text is getting copied");
        // var text = document.getElementById("myBox");
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");
    }

    // clear
    const handleClearClick = ()=>{
        console.log("Text is cleared");
        let newValue = '';
        setText(newValue)
        props.showAlert("Text Cleared","success");
    }


    //Remove Extra Spaces
    const handleExtraSpacesClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space is removed","success");
    }

    // Below line of code add or concatinate newdata to previous data,basically it add new data to old data ex:"Enter text here" is old data ,So now new data is Kangralkar ,Final output will be "Enter text hereKangralkar"
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text , setText] = useState('');
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className = "mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#d5cfcf':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} character</p>
        {/* Below line of code we are checking, how much time required to read any passage or letter of word(We saw for 125words 1 min required so for 1 word to read it  takes 0.008 ie 1 divide by 125) */}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
