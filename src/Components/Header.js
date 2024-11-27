import React from 'react'
import photo from '../photo.png'
import logo from '../logo.png';
// backgroundImage:`url(${photo})`

const Header = () => {
  return (
    <div id='header' style={{}}>
      <div className='con'>
        {/* <nav>
            <img  src={logo} className='logo'/>

            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav> */}





            <nav className="navbar navbar-expand-lg  navbar-dark ">
                <div className="container-fluid">
                        {/* <img  src={logo} className='logo'/> */}


                        <a className="navbar-brand" href="#"><span>N</span>ikita</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                    
                  

                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#header">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            
                        </ul>
                        </div>

                   
                    
                        
                </div>
            </nav>












        <div className="header-text">
            <p>ReactJs Developer</p>
            <h1>Hi, I'm <span>Nikita </span><br/>from India</h1>
        </div>
      </div>
    </div>
  )
}

export default Header
