import React, { useState } from 'react'
import photo from '../photo.png'
import secondphoto from '../secondphoto.png'

const About = () => {

    const[skill, setskill] = useState(true);
    const[experience, setexperience]= useState(false);
    const[education, seteducation]= useState(false);

    const sk = (e)=>{
       
        setskill(true);
        setexperience(false);
        seteducation(false);
    }
    const ex=(e)=>{
        setskill(false);
        setexperience(true);
        seteducation(false);
    }
    const edu=(e)=>{
        setskill(false);
        setexperience(false);
        seteducation(true);
    }



  return (
    <div id='about'>

        <div className="container">
            <div className="ro">
                <div className="about-col-1">
                    <img src={secondphoto} alt='photo'/>
                </div>
                <div className="about-col-2">
                    <h1 className='sub-title'>About me</h1>
                    <p>I am pursuing Information Technology from the Government College of Engineering Karad. My very first objective is to learn and apply my skills in a dynamic IT environment, contributing to team goals and my own growth. Certain skills that I have worked with include Data Structures and Algorithms, OOPs ( C++ ), Web development (MERN Stack), Javascript, React Js. and MVC.net Framework. I just coded as a matter of consistency. Solved 250+ problems on leetcode. </p>

                    <div className="tab-titles">
                        <p className={`tab-links ${skill ? "active-link": ""}`} onClick={sk}>Skills</p>
                        <p className={`tab-links ${experience ? "active-link": ""}`} onClick={ex}>Experience</p>
                        <p className={`tab-links ${education ? "active-link": ""}`} onClick={edu}>Education</p>
                    </div>



                    <div className={`tab-contents ${skill ? "active-tab": ""}`} id='skills'>
                        <ul>
                            <li><span>UI/UX</span><br />Aceternity UI, Shadcn library</li>
                            <li><span>ReactJs</span><br />Making web pages using ReactJs</li>
                            <li><span>Mern Stack</span><br />Worked on Mern project</li>
                        </ul>
                    </div>

                    <div className={`tab-contents ${experience ? "active-tab": ""}`} id='experience'>
                        <ul>
                            <li><span>2023-current</span><br />Member of the Alphageeks club</li>
                            <li><span>Anahata Acoustics</span><br />Frontend Intern at Anahata Acoustics</li>
                            
                        </ul>
                    </div>

                    <div className={`tab-contents ${education ? "active-tab": ""}`} id='education'>
                        <ul>
                            <li><span>2019</span><br />12th from Vidya Pratishtan College, Baramati</li>
                            <li><span>2025</span><br />Btech from Government college of Engineering Karad</li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
