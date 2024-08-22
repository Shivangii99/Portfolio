import React from 'react'
import {motion} from 'framer-motion'
import shivangi from './shivangi.jpg'
import mouse from './mouse.svg'
import './hero.css'

const Hero = () => {
    const imageVaraint={
        initial:{
            x:0,
        },
        animate:{
            x:"-220%",
            transition:{
                duration:14,
                repeatType: "mirror",
                repeat:Infinity,
            },
        },
    }
    const variant={
        initial:{
            x:-500,
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:0.4,
                staggerChildren:0.2,
            },
        },
        scrollButton:{
            opacity:0,
            y:14,
            transition:{
                duration:0.9,
                repeat:Infinity,
            },
        },
    }
    return (
        <div className='hero-contain'>
            <div className='wrapper'>
                <motion.div className='text-contain' variants={variant} initial="initial" animate="animate">
                    <motion.h1 variants={variant}><span>Web Developer</span> & UI/UX Designer</motion.h1>
                    <motion.div className='btn' variants={variant}>
                        <motion.button variants={variant}>Download Resume</motion.button>
                         <motion.button className='filled' variants={variant}>Contact</motion.button>
                    </motion.div>
                    <motion.img src={mouse} alt='scroll' variants={variant} animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div className='sliding' variants={imageVaraint} initial="initial" animate="animate">
                Developer Designer Workaholic
            </motion.div>
            <div className='img-contain'>
                <img src={shivangi} alt='shivangi' />
            </div>
        </div>
    )
}

export default Hero
