import React from 'react'
import './Links.css'
import GithubLogo from '../images/GithubLogo.png'
import LinkedinLogo from '../images/LinkedinLogo.png'

const githubLink = () => {
    window.open('https://github.com/Kyle-Pixley', '_blank');
}
const linkedinLink = () => {
    window.open('https://www.linkedin.com/in/kyle-pixley-257686279/', '_blank')
}

function Links() {
  return (
    <div id='links-list'>

        <div id='github-parent' className='link-icon-parents' onDoubleClick={githubLink}>
            <img id='github-image' src={GithubLogo} alt='github logo'></img>
            <p id='github-text'>GitHub</p>
        </div>

        <div id='linkedin-parent' className='link-icon-parents' onDoubleClick={linkedinLink}>
            <img id='linkedin-image' src={LinkedinLogo} alt='linkedin logo'></img>
            <p id='linkedin-text'>Linkedin</p>
        </div>

    </div>
  )
}

export default Links