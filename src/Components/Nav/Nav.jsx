import React, { useEffect, useState } from 'react'
import "./Nav.css"
// import startImage from '../images/win95startLogo.png'

function Nav() {

    const [currentTime, setCurrentTime] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const timeString = new Date().toLocaleString('en-IN').split(' ')[1];
            setCurrentTime(timeString)
        }, 1000)
        return () => clearInterval(interval)
    },[])
  return (
    <>
    <div id='navbar'>

            <button id='start-button'>
                {/* <div id='start-img'></div> */}
                <p id='start'>Start</p>
            </button>

        <div id='time-parent'>
            <div id='time'><p id='current-time'>{ currentTime }</p></div>
        </div>

    </div>
    </>
  )
}

export default Nav