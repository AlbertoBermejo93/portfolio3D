import React from 'react'
import { useEffect, useState } from 'react'
const BackToTopButton = () => {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
   return (
    <div>{BackToTopButton && (
        <button style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "100px",
        }}
        
        onClick={scrollUp} >
            
            ^</button>
    )}</div>
  )
}

export default BackToTopButton