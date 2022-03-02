import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react';
import Alert from './component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // At start navbar is light
  const [mode, setMode] = useState('light');
  // Alert is set to null intially but later setAlert change its value 
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      // navbar heading will change from light to dark
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
      document.title ='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled","success")
      document.title ='TextUtils - light Mode';
    }
  }
  return (
    <>
    {/* <Navbar title = "shivani"  about ="About-Us"/> */}
    {/* <Navbar/>  */}

    
    {/* Below line of code is for next exercise ie;Usestate*/}
    <Router>
    <Navbar title = "TextUtils" mode ={mode} toggleMode={toggleMode}/>
    {/* Below code is for dark mode is been enable alert and light mode is been enable alert*/}
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about"
            element={<About />}/>
          
          <Route path="/"
          element={<TextForm showAlert={showAlert} heading ="Enter the text to analyse below" mode ={mode}/>}/>
         
    </Routes>
    {/* Below line of code is for accord */}
    {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
