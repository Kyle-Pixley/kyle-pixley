import React, { useState, useRef } from 'react'
import './Hobbies.css'
import { useZIndex } from '../ZIndexFinder';

function Hobbies() {

    const [ position, setPosition ] = useState({x: 150, y: 120 });
    const [ move, setMove ] = useState(false);
    const [ offSet, setOffSet ] = useState({x: 0, y: 0 });
    const [ zIndex, setZIndex ] = useState(0);
    const topBar = useRef(null);
    const { updateMaxZIndex }= useZIndex();

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
<div id='outside-border' 
    style={divStyle}
    onMouseDown={mouseStart}
    onMouseMove={mouseMove}
    onMouseUp={stopMove}>
        
    <div id='about-me-parent'>
        <div id='top-bar' ref={topBar}>
            <p id='about-me-window-text'>Hobbies</p>
        </div>
        
        <div id='window-body'>
            <p id='window-text'>When I'm not coding, you can usually find me immersed in video games or riding my motorcycle through the mountains. I also have a knack for making or fixing things with my hands, which is probably one of the reasons I enjoy coding so much. It satisfies my desire to be creative and problem-solve. I'm excited to continue exploring the world of web development and see where this journey takes me!</p>
        </div>
    </div>
</div>
  )
}

export default Hobbies