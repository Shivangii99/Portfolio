import React from 'react'
import './sidebar.css'
import {motion} from 'framer-motion'

const Links = () => {
  const variants = {
    open:{
      transition:{
        staggerChildren: 0.2,
      },
    },
    closed:{
      transition:{
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }
  const itemVariant = {
    closed:{ opacity:0, y:50},
    open:{ opacity:1, y:0},
  }
  const Lists = ["HomePage", "Skills", "Work/Experience", "Services", "Contact"]
  return (
    <motion.div className='links' variants={variants}>
      {Lists.map((list)=>(
        <motion.a href={`#${list}`} key={list} variants={itemVariant} whileHover={{scale:1.1}} whileTap={{scale:0.8}}>{list}</motion.a>
      ))}
    </motion.div>
  )
}

export default Links
