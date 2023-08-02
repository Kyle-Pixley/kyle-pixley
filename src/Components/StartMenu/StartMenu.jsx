import React, { useState } from 'react'
import './Startmenu.css'
import AboutMeLogo from '../images/about-me.png'
import ResumeLogo from '../images/resume-icon-png-19036.png'
import HobbiesLogo from '../images/game-icon.png'
import ContactInfoLogo from '../images/ContactInfoLogo.png'
import AboutMe from '../AboutMe/AboutMe'
import Resume from '../Resume/Resume'
import Hobbies from '../Hobbies/Hobbies'
import ContactInfo from '../ContactMe/ContactMe'

function StartMenu({ maxZIndex }) {

  const [ aboutMe, setAboutMe ] = useState(false)
  const [ resume, setResume ] = useState(false)
  const [ hobbies,setHobbies ] = useState(false)
  const [ contactInfo,setContactInfo ] = useState(false)

  const displayAboutMe = () => {
    setAboutMe(!aboutMe)
  }

  const displayResume = () => {
    setResume(!resume)
  }

  const displayHobbies = () => {
    setHobbies(!hobbies)
  }

  const displayContactInfo = () => {
    setContactInfo(!contactInfo)
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
          <img id='resume-image' src={ResumeLogo} alt='"rlogo"'></img>
          <p id='resume-text'>Resume</p>
        </div>

        <div id='hobbies' className='start-li' onClick={displayHobbies}>
          <img id='hobbies-image' src={HobbiesLogo} alt='"Hobbies logo"'></img>
          <p id='hobbies-text'>Hobbies</p>
        </div>

        <div id='contact-info' className='start-li' onClick={displayContactInfo}>
          <img id='contact-info-image' src={ContactInfoLogo} alt='"Contact Info logo"'></img>
          <p id='contact-info-text'>Contact Info</p>
        </div>

      </div>

    </div>
    {aboutMe && <AboutMe maxZIndex={maxZIndex}/>}
    {resume && <Resume maxZIndex={maxZIndex}/>}
    {hobbies && <Hobbies maxZIndex={maxZIndex}/>}
    {contactInfo && <ContactInfo maxZIndex={maxZIndex}/>}
    </>
  )
}

export default StartMenu