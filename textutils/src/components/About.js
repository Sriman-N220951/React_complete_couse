import React from 'react';

export default function About(props) {
  return (
    <div className="container-fluid my-4 about-page">
      <h2>About TextUtils</h2>
      <p>
        TextUtils is a simple React app for transforming and analyzing text. Use it to convert text to uppercase,
        lowercase, clear your text, and review a quick summary of your content.
      </p>
      <h4>Features</h4>
      <ul>
        <li>Fast text conversion to uppercase and lowercase</li>
        <li>Live word and character count</li>
        <li>Optimized full-width textarea for easier typing</li>
        <li>Dark mode toggle for comfortable viewing</li>
      </ul>
      <p>
        Click the HOME link to return to the main text editor. The ABOUT link opens this page in a new browser tab
        for a smoother browsing experience.
      </p>
    </div>
  );
}
