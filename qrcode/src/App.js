import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";
import { Input } from 'antd';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Customer from './pages/customer';


function Home(){
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue("http://192.168.0.209:3000/"+"customer/"+event.target.value);
  }
  return(
    <div className="App">
      <header className="App-header">
      <Input size="large" className="input" placeholder="Enter your customer name" onChange={handleChange} />
      <QRCode value={value} />
      </header>
    </div>
  )
}

function App() {
  
  
  return (
    <Router>
        <Routes>
          <Route element={<Home/>} path=""/>
          <Route element={<Customer/>} path="/customer/:name"/>
        </Routes>
        
      </Router>
  );
}

export default App;
