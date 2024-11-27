import React, { useState } from 'react'
import resume from '../Resume.pdf'

const Contact = () => {

    const [st, setst]=useState({name:"", email:'', msg:''});
    const [sums, setsums]=useState('');
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxx23Wn-jM_vQQcWfh12cbD_42hbOWc-HzzYCVyXKA3pP6DNMC2F57_T6wnRRVah91F/exec'
    //   const form = document.forms['submit-to-google-sheet']

    //   form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //       .then(response => console.log('Success!', response))
    //       .catch(error => console.error('Error!', error.message))
    //   })

    const oncl=(e)=>{
        e.preventDefault();

        fetch(scriptURL,{
            method:'POST',
            body:JSON.stringify({
                Name:st.name,
                Email:st.email,
                Message:st.msg
            })
        }).then((response)=>console.log('success!',response))
        .catch((error) =>console.error('Error!', error.message))

        setst({name:"", email:'', msg:''})

        setsums("Message sent successfully");
        setTimeout(() => {
            setsums('');
        }, 3000);
    }

    const onch=(e)=>{
        setst({...st, [e.target.name]:e.target.value});
    }
   

  return (
    <div id='contact'>

        <div className="container">
            <div className="ro">
                <div className="contact-left">
                    <h1 className='sub-title'>Contact Me</h1>
                    <p><i className="fa-solid fa-paper-plane"></i> nikitanagare045@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> 8766523140</p>
                    <p className="social-icons">
                        <a href="https://www.linkedin.com/in/nikita-nagare-1b9517251/"><i className="fa-brands fa-linkedin"></i></a>
                        Linkdin
                    </p>
                    <p className="social-icons">
                        <a href="https://leetcode.com/u/nikitanagare01/"><i className="fa-solid fa-code"></i></a>
                        Leetcode
                    </p>
                    <a href={resume} download className='btn btn2'>Download CV</a>
                </div>


                <div className="contact-right">
                    <form name='submit-to-google-sheet'>
                        <input type="text" name="name" id='name' onChange={onch} value={st.name} placeholder='Your Name' required />
                        <input type="email" name='email' id='email' onChange={onch} value={st.email} placeholder='Your Email' required />
                        <textarea name="msg" id='msg' onChange={onch} value={st.msg} rows="6" placeholder='Your Message'></textarea>
                        <button type="submit" className='btn btn2' onClick={oncl}>Submit</button>
                    </form>
                    <span id='message'>{sums}</span>
                </div>
            </div>
        </div>

        <div className="copyright">
            <p>Thank you <i className="fa-regular fa-face-smile"></i></p>
        </div>
        
    </div>
  )
}

export default Contact
