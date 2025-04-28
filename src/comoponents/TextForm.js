import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
        // console.log("convert to uppercase");
    }
    const handleLwClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleSenClick = () =>{
        let newText = text.charAt(0).toUpperCase()+text.slice(1).toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Sentencecase", "success");
    }
    const handleToCopy = ()=>{
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied the text", "success");
    }

    const handleExtraSpaces = () =>{
        let cleanedText = text.split(' ').filter(word => word!=='');
        //here we can use this approach       --> let cleanedText = text.split(/\s+/);
        setText(cleanedText.join(' '));
        props.showAlert("Removed the extra spaces", "success");
    }

    const handleToClear = ()=>{
        let newText ="";
        setText(newText);
        props.showAlert("Cleared The Text!", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLwClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleSenClick}>Convert to Sentencecase</button>
            <button className="btn btn-primary mx-1" onClick={handleToCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-primary mx-1" onClick={handleToClear}>Clear</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summery</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here."}</p>
        </div>
    </>
  )
}
