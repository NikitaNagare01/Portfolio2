import React from 'react'

const Services = () => {
  return (
    <div id='services'>
        <div className="container">
            <h1 className="sub-title">My Services</h1>

            <div className="services-list">

                <div>
                    <i className="fa-solid fa-code"></i>
                    <h2>Web Design</h2>
                    <p>Developed web pages for multiple projects</p>
                </div>

                <div>
                    <i className="fa-brands fa-react"></i>
                    <h2>ReactJs Developer</h2>
                    <p>Persuing my journey of coding to master my React skills</p>
                </div>

                <div>
                    <i className='fas fa-crop-alt'></i>
                    <h2>Mern Stack</h2>
                    <p>Working on Real-work Projects with the help of MERN stack</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Services
