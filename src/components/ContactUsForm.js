import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsForm = () => {

  const [userData, setUserData] = useState({
      userName: "",
      email: "",
      phone: "",
      message: ""
  })

  let name, value
  const getData = (eve) => {
        name =  eve.target.name
        value = eve.target.value

        setUserData({...userData, [name]:value })
  }

  const sendData = async (e) => {
      e.preventDefault()

      const { userName, email, phone, message } = userData;

      if(userName && email && phone && message) {

      const result = await fetch("https://booksstore-5bf50-default-rtdb.firebaseio.com/ContactFormData.json",{
          method: "POST",
          headers: {
           "Content_Type" : "application/json"
          },
          body: JSON.stringify({
             userName,
             email,
             phone:Number(phone),
             message
          })
      });

     if(result){
        toast("Thanks For Contacting Us!!")
        setUserData({
                      userName: "",
                      email: "",
                      phone: "",
                      message: ""
        })
     }
    } else{
       toast("Please fill the data ")
    }

    
  }


  return (
     <>
     <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="userName" className="input" 
              value={userData.userName} onChange={getData} placeholder='Username' />
              
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" 
              value={userData.email} onChange={getData}  placeholder='Email'/>
       
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" 
              value={userData.phone} onChange={getData} placeholder='Phone' />
 
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" 
              value={userData.message} onChange={getData} placeholder='Message'></textarea>
            </div>
            <input type="submit"  className="btnn" onClick={sendData} />
          </form>
        </div>
        <ToastContainer />
     </>
  )
}

export default ContactUsForm
