import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleClear = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const wordCount = text.trim().split(/\s+/).filter((element) => element.length !== 0).length;

  return (
    <>
      <div className="container-fluid textform-container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control textarea-large"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
            placeholder="Type or paste your text here..."
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container-fluid my-4 text-summary-container">
        <h1>Your text summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox to preview it here!!'}</p>
      </div>
    </>
  );




}
