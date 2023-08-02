import React, { useState, useRef } from 'react'
import Selfie from '../images/animatedSelfie.jpg'
import './Aboutme.css'
import { useZIndex } from '../ZIndexFinder';

function AboutMe() {

    const [ position, setPosition ] = useState({x: 0, y: 0 });
    const [ move, setMove ] = useState(false);
    const [ offSet, setOffSet ] = useState({x: 0, y: 0 });
    const [ zIndex, setZIndex ] = useState(0);
    const topBar = useRef(null);
    const { updateMaxZIndex } = useZIndex();

    const mouseStart = e => {
        const isTopBarClicked = topBar.current && topBar.current.contains(e.target)
        if(isTopBarClicked) {
        setMove(true);
        setOffSet({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        })
        updateMaxZIndex(zIndex + 1)
        setZIndex((prevZIndex) => prevZIndex + 1);
        }
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
        <div id='top-bar' ref={topBar}>
            <p id='about-me-window-text'>About Me</p>
        </div>
        
        <div id='window-body'>
            <img id='selfie' src={Selfie} alt='Its me Kyle P'></img>
            <p id='window-body-text'>Hi, I'm Kyle, and I became hooked on coding when I started exploring web development online. Right from the start, I knew it was something I would truly enjoy. A friend recommended a web development bootcamp class, and I eagerly signed up. Since then, my passion for coding has grown exponentially, and I find myself completely addicted to it. However, I'm wondering if there's any way I can make this experience even better.</p>
        </div>
    </div>
</div>
  )
}

export default AboutMe