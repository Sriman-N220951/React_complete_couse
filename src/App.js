import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('white');
    document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };

  return (
    <Router>
      <Navbar title="HOME" animal="ABOUT" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container-fluid my-3 page-container">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
