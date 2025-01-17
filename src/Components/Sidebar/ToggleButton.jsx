import React from 'react'
import './sidebar.css'
import {motion} from 'framer-motion'

const ToggleButton = ({ setOpen }) => {
  return (
    <div className='toggle'>
      <button onClick={()=> setOpen((prev)=>!prev)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
        <motion.path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={{
          open:{d:"M 3 16.5 L 17 2.5"},
          closed:{ d:"M 2 2.5 L 20 2.5" }
        }}/>
        <motion.path d="M 2 9.423 L 20 9.423" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={{
          open:{opacity:0},
          closed:{opacity:1}
        }} />
        <motion.path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" variants={{
          open:{d:"M 3 2.5 L 17 16.346"},
          closed:{d:"M 2 16.346 L 20 16.346"}
        }} />
     </svg>
      </button>
    </div>
  )
}

export default ToggleButton
