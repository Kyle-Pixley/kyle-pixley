import React, { useState } from 'react'
import './Startmenu.css'
import AboutMeLogo from '../images/about-me.png'
import AboutMe from '../AboutMe/AboutMe'
import Resume from '../Resume/Resume'

function StartMenu() {

  const [ aboutMe, setAboutMe ] = useState(false)
  const [ resume, setResume ] = useState(false)

  const displayAboutMe = () => {
    setAboutMe(!aboutMe)
  }

  const displayResume = () => {
    setResume(!resume)
  }

  return (
    <>
    <div id='start-menu'>

      <div id='start-name'>
        <p id='start-name-text'>Kyle Pixley</p>
      </div>

      <div id='start-options'>

        <div id='about-me' className='start-li' onClick={displayAboutMe}>
          <img id='about-me-image' src={AboutMeLogo} alt='about me'></img>
          <p id='about-me-text'>About Me</p>
        </div>

        <div id='resume' className='start-li' onClick={displayResume}>
          <img id='resume-image' src='' alt='"rlogo"'></img>
          <p id='resume-text'>Resume</p>
        </div>

      </div>

    </div>
    {resume && <Resume />}
    {aboutMe && <AboutMe />}
    </>
  )
}

export default StartMenu