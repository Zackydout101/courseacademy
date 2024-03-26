'use client'
import React, { useState, useEffect } from 'react'
import Navlist from './NavUtils/Navlist'
import Navlist2 from './NavUtils/Navlist2'

type Props = {
}

const OpenSourceNav = (props: Props) => {
    const [show,setShow] = useState(false)
    const handleOnclick = () => {
        if (window.innerWidth < 1024 ) {
                setShow(!show)
        }
    }

    const handleMouseEnter = () => {
        if(window.innerWidth > 1024){
            setShow(true)
        }
    }

    const handleMouseLeave = () => {
        if(window.innerWidth > 1024){
            setShow(false)
        }
    }
  return (
        <li id='myLi'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          
        </li>
  )
}

export default OpenSourceNav