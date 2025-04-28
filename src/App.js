import React, { useState } from 'react'
import './App.css';
// import About from './comoponents/About';
import Navbar from './comoponents/Navbar';
import TextForm from './comoponents/TextForm';
import Alert from './comoponents/Alert';
function App() {
  const [mode, setMode] = useState('light'); // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title = "TextUtils - Dark mode";

      // setInterval(()=>{
      //   document.title="TextUtils is Amazing Mode.";
      // },2000)

      // setInterval(()=>{
      //   document.title="Istalled TextUtils now."
      // },1500)

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  }
  return (
    <>
      {/* <Navbar title='TextUtils' aboutText = 'About TextUnitls'/> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Navbar/> */}

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
