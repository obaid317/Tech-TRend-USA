import Navbar from "./Components/Navbar";
import './App.css'
import Home from "./Components/home"; 
import About from "./Components/About";
import Services from "./Components/Services"; 
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
import Clients from "./Components/Clients";
import { useState, useEffect } from "react"; 
 import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
 


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function App() {
  const [tfValues, settfValues] = useState(false);
  function chatbot_close() {
    settfValues(!tfValues);
  }

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    const initialValues = { username: "", email: "", phone: "", category: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [status, setStatus] = useState('');
    const [errorsValoues, Seterrorsvalues] = useState("");
  
    const handleSubmit = (e) => {
  
   e.preventDefault();
    if (formValues.email.length == 0 || formValues.message.length == 0 || formValues.phone.length == 0 || formValues.username == 0 || formValues.category.length == 0) {
      Seterrorsvalues("Kindly Provide all required information to proceed");
    } else {

      Seterrorsvalues("Send Successfully");
      emailjs.send('service_0wpo01p', 'template_bjtgqtb', formValues ,"b98PeCBBoiRZVeQRP"  )
        .then(response => {
          console.log('SUCCESS!', response);
          setFormValues({
            username: "", email: "", phone: "", category: "", message: ""
          });
          setStatus('SUCCESS');
          Seterrorsvalues("Send Successfully");
        }, error => {
          console.log('FAILED...', error);
        });
    }


  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(name, value);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "";
    }
    if (!values.email) {
      errors.email = "";
    } else if (!regex.test(values.email)) {
      errors.email = "";
    }
    if (!values.password) {
      errors.password = "";
    } else if (values.password.length < 4) {
      errors.password = "";
    } else if (values.password.length > 10) {
      errors.password = "";
    }
    return errors;
  };
 

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
       <button       className="floatingButton " onClick={openModal}>Book Appointment</button>
      <Navbar />
 
 
     
      <Home />
   
      <Services />
     
      <About />
 
      {/* <Clients/> */}
      <Contactus />
      <Footer />

     
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={closeModal}>close</button> */}
        {/* <div>I am a modal</div> */}
       <form onSubmit={handleSubmit}>
            <p className='contact-one-heads' ><span className='us'>Schedule</span> Meeting</p >
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">

                <input className='input-decoration-inquiry-form'
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.username}</p>
              <div className="field">

                <input className='input-decoration-inquiry-form'
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="field">

                <input className='input-decoration-inquiry-form'
                  type="Text"
                  name="phone"
                  placeholder="Phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <div className="field">

                <input className='input-decoration-inquiry-form'
                  type="Text"
                  name="category"
                  placeholder="Category"
                  value={formValues.category}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <div className="field">

                <textarea style={{ "columns": "8", "rows": "5", "height": "150px", "resize": "none" }} className='input-decoration-inquiry-form'
                  type="Text"
                  name="message"
                  placeholder="Message"
                  value={formValues.message}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>

              <button className="bttn-submit">Submit</button>
              <p className='show-error'>{errorsValoues}</p>
            </div>
          </form>
      </Modal>
    </div>
  );
}

export default App;
