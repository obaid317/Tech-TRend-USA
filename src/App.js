import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Components/home"; 
import About from "./Components/About";
import Services from "./Components/Services"; 
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import Clients from "./Components/Clients";
import { useState, useEffect } from "react"; 
function App() {
  const [tfValues, settfValues] = useState(false);
  function chatbot_close() {
    settfValues(!tfValues);
  }
  const theme = {

    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#d29c5c',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#d29c5c',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  return (

    <div className="App">
      <Navbar />
     
      <Home />
   
      <Services />
     
      <About />
 
      {/* <Clients/> */}
      <Contactus />
      <Footer />

    </div>
  );
}

export default App;
