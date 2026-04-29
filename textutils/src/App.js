import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

{/*< Navbar title="SIGMA" animal="SRIMAN"/>*/}
<Navbar title="SIGMA" animal="SRIMAN" />
<div className="container my-3">
  <TextForm heading="enter the text to analyse"/>
</div>



    </>
  );
}

export default App;
