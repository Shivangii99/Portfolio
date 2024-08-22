import React, { useRef } from 'react'
import './services.css'
import Office from './office.jpg'
import {motion} from 'framer-motion'

const Services = () => {
    // const ref = useRef();

    // const isInView = useInView(ref, {margin:"-100px"});

    const variant = {
        initial:{
            opacity:0,
            x:-100,
            // y:-100,
        },
        animate:{
            opacity:1,
            x:0,
            // y:0,
            transition:{
                duration:1,
                staggerChildren:0.7,
            },
        },
    }
  return (
    <motion.div className='service'  variants={variant} initial="initial" whileInView="animate" >
      <motion.div className='text' variants={variant}>
        <p>I focus on helping your brand grow 
            <br/>and move forward</p>
        <hr/>
      </motion.div>
      <motion.div className='title' variants={variant}>
        <div className='title1'>
        <img src={Office} alt='office'></img>
        <p><motion.b whileHover={{color:"orange"}}>Best</motion.b> ideas For</p>
        </div>
        <div className='title2'>
        <p>Your <motion.b whileHover={{color:"orange"}}>Organization</motion.b></p>
        <button>What we Do?</button>
        </div>
      </motion.div>
      <motion.div className='list' variants={variant}>
        <motion.div className='list-internal' whileHover={{backgroundColor:"lightgray", color:"black", cursor:"pointer"}}>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi officiis id?</p>
            <button>Go</button>
        </motion.div>
        <motion.div className='list-internal' whileHover={{backgroundColor:"lightgray", color:"black", cursor:"pointer"}}>
            <h3>Originaal Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi officiis id?</p>
            <button>Go</button>
        </motion.div>
        <motion.div className='list-internal' whileHover={{backgroundColor:"lightgray", color:"black", cursor:"pointer"}}>
            <h3>Dynamicity</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi officiis id?</p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
