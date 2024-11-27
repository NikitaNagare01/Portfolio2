import React from 'react'
import PropTypes from 'prop-types'
import work1 from '../work1.jpeg'
import work2 from '../work2.jpeg'
import image from '../image.png'

const Portfolio = props => {
  return (
    <div id='portfolio'>
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">

            <div className="work">
                <img src={image} alt="work 1" />

                <div className="layer">
                    <h3>Online Quiz</h3>
                    <p>Quizzes offer a great mix of knowledge and entertainment. Take a quiz to uncover interesting facts or create one for others. To get started, simply register and dive into the world of online quizzes. There's something for everyone!</p>
                    <a href="https://online-quiz-frontend-two.vercel.app"><i className="fa-solid fa-link"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work1} alt="work 1" />

                <div className="layer">
                    <h3>Textutil</h3>
                    <p>This page help user to perform different operation such as convert the entered text to uppercase, lowercase, copy. User can get to know how many words are there present in the entered text.</p>
                    <a href="https://nikitanagare01.github.io/TEXTUtils-React/"><i className="fa-solid fa-link"></i></a>
                </div>
            </div>

            <div className="work">
                <img src={work2} alt="work 1" />

                <div className="layer">
                    <h3>NewsMonkey</h3>
                    <p>News App which shows all types of updated News. Helpful for user to see the new the news according to his convinience such as bussiness, technology, sport, entertainement</p>
                    <a href="https://github.com/NikitaNagare01/NewsMonkey"><i className="fa-solid fa-link"></i></a>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

Portfolio.propTypes = {

}

export default Portfolio
