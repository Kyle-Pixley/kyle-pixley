import React, { useState } from 'react'
import './Aboutme.css'

function AboutMe() {

    const [ position, setPosition ] = useState({x: 0, y: 0 });
    const [ move, setMove ] = useState(false);
    const [ offSet, setOffSet ] = useState({x: 0, y: 0 });
    const [ zIndex, setZIndex ] = useState(0);


    const mouseStart = e => {
        setMove(true);
        setOffSet({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        })
        setZIndex(prevZIndex => prevZIndex + 1)
    };

    const mouseMove = e => {
        if (!move) 
        return 
        setPosition({
            x: e.clientX -offSet.x,
            y: e.clientY - offSet.y
        })
    }

    const stopMove = () => {
        setMove(false)
    };

    const divStyle = {
        zIndex: zIndex,
        left: position.x,
        top: position.y
    }

  return (
<div id='outer-border' 
    style={divStyle}
    onMouseDown={mouseStart}
    onMouseMove={mouseMove}
    onMouseUp={stopMove}>

    <div id='about-me-parent'>
        <div id='top-bar'>
            <p id='about-me-window-text'>About Me</p>
        </div>
        
        <div id='window-body'>
            div for my photo and a div for some text 
        </div>
    </div>
</div>
  )
}

export default AboutMe