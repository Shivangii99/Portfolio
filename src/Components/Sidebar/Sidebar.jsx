import React, { useState } from 'react'
import Links from './Links'
import ToggleButton from './ToggleButton'
import {motion} from 'framer-motion'

const Sidebar = () => {
    const[open, setOpen] = useState(false);

    const variants={
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                delay:0.2,
                type:"spring",
                damping:20
            }
        },
        closed:{
            clipPath: "circle(25px at 50px 50px)",
            transition:{
                delay:0.2,
                type:"spring",
                stiffness:200,
                damping:40
            }
        }
    }
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
      <motion.div className='bg' variants={variants}>
        <Links/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
