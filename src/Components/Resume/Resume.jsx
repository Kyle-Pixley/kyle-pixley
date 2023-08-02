import React, { useReducer, useState, useRef } from 'react'
import './Resume.css'
import ResumeDownload from '../images/resume-download.png'
import { useZIndex } from '../ZIndexFinder';

function Resume() {

    const [ position, setPosition ] = useState({x: 80, y: 60 });
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
            <p id='about-me-window-text'>Embracing Change</p>
        </div>
        
        <div id='window-body'>
            <p id='window-text'>Hey, I'm Kyle, and I'm thrilled to pursue a career in web development. Before this, I delivered pizzas, an experience that surprisingly taught me valuable skills for my future.</p>
            <p id='text-2'>Pizza delivery taught me to handle high-stress situations with calm and focus, essential in web development's fast-paced world. It also cultivated empathy, understanding diverse customer needs, which is crucial in user-centric web design.</p>
            <p id='text-3'>Now, well-prepared and eager to learn, I'm excited to create digital experiences that make a lasting impact. The journey from pizza delivery to web development may seem unexpected, but it's shaped me for success in this innovative field.</p>
                <div id='download-resume'>
                        <p id='download-text'>Download Resume</p>
                    <a href='./public/assets/Resume.pdf' download>
                        <img id='download-image' src={ResumeDownload} alt='download'/>
                    </a>
                </div>
        </div>
    </div>
</div>
  )
}

export default Resume