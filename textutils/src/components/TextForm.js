import React,{useState} from "react"
export default function TextForm(props){

const handleUpClick = ()=>{
    //console.log("uppercase was clicked: "+ text);
    let newText=text.toUpperCase();
    setText(newText);
}
const handleClear = ()=>{
    
    let newText='';
    setText(newText);
}
const handleOnChange = (event)=>{
    //console.log("onchange");
    setText(event.target.value)
}
const handleLoClick = ()=>{
    //console.log("lowercase was clicked: "+ text);
    let newText=text.toLowerCase();
    setText(newText);
}
const [text,setText] = useState('');
//setText=("new text"); //correct way to change the state

return(
    <>
<div className="container">
    <h1>{props.heading}</h1>
    <div className="md-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lower case</button>
<button className="btn btn-primary mx-1" onClick={handleClear}>clear</button>
</div>
<div className="container my-3">
<h1>your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters </p>
<p>{0.008 * text.split(" ").length}  MINUTES READ</p>
<h2>preview</h2>
<p>{text}</p>

</div>
</>




)




}