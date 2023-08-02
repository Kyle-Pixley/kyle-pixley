import React, { useState, useRef } from 'react'
import '../Hobbies/Hobbies.css'
import { useZIndex } from '../ZIndexFinder';

function ContactInfo() {

    const [ position, setPosition ] = useState({x: 220, y: 180 });
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
        updateMaxZIndex(zIndex +1)
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
<div id='outside-border' 
    style={divStyle}
    onMouseDown={mouseStart}
    onMouseMove={mouseMove}
    onMouseUp={stopMove}>
        
    <div id='about-me-parent'>
        <div id='top-bar' ref={topBar}>
            <p id='about-me-window-text'>Contact Info</p>
        </div>
        
        <div id='window-body'>
            <p id='window-text'>Are you looking for a talented and skilled professional to bring your projects to life? Look no further! I'm a passionate web designer and developer with a diverse portfolio showcasing my expertise in creating stunning and functional websites.</p>
            <p id='window- text'>Whether you have a specific project in mind or want to explore possibilities, I'm here to help. Feel free to reach out to me with any inquiries or hiring opportunities through my website's portfolio.</p>
            <p id='window-text'>Email: kyle_pixley@hotmail.com</p>
        </div>
    </div>
</div>
  )
}

export default ContactInfo