import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  return (
    <>

{/*< Navbar title="SIGMA" animal="SRIMAN"/>*/}
<Navbar title="SIGMA" animal="SRIMAN" />
<Alert alert="this is alert"/>
<div className="container my-3">
  <TextForm heading="enter the text to analyze below "/>
</div>



    </>
  );
}

export default App;
