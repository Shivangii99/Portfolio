import React, { useState } from 'react'
import './skill.css'
import { motion } from 'framer-motion'
import Node from '../parallax/node.jpg'
import logo from '../parallax/react.png'
import Html from '../parallax/html.png'
import Express from '../parallax/express.png'
import Mongo from '../parallax/mongo.jpg'
import Figma from '../parallax/figma.png'


const Skills = () => {

    const handleClick = (e) => {
        const id = e.target.id;
        console.log(id);
        e.target.nextElementSibling.classList.add("open");
    }
    const handleClose = (e) => {
        // console.log(e);
        e.target.offsetParent.classList.remove("open");
    }

    return (
        <motion.div className='main-contain'>
            <motion.h1 className='heading'>
                Skills
            </motion.h1>
            <motion.div className='card-contain'>
                <motion.div id='card1' className='card' onClick={handleClick}>
                    <motion.img src={Html} alt='skills' id='html' whileHover={{ scale: 1.03, rotate: 360 }} transition={{ duration: 0.3 }}></motion.img>
                    <motion.div className='modal' id='html-card'>
                        <span class="close" onClick={handleClose}>&times;</span>
                        <h4>Html/Css/JavaScript</h4>
                        <p>
                            Fluent in semantic markup, I leverage the latest HTML5 standards to structure content in a meaningful way, ensuring accessibility and SEO optimization.<br></br><br></br>
                            Mastery in CSS styling techniques enables me to create stunning visual designs, utilizing CSS preprocessors like Sass to streamline development and maintainability.<br></br><br></br>
                            With a strong command of JavaScript, I bring interactivity and functionality to websites, from implementing complex animations to integrating third-party APIs seamlessly.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div id='card2' className='card' onClick={handleClick}>
                    <motion.img src={logo} alt='skills' id='react' whileHover={{ scale: 1.03, rotate: 360 }} transition={{ duration: 0.3 }}></motion.img>
                    <motion.div className='modal' id='react-card'>
                        <span class="close" onClick={handleClose}>&times;</span>
                        <h4>React</h4>
                        <p>Highly skilled in React development, I leverage its component-based architecture, Hooks, React Routers and Material UI to create modular and reusable UI elements, resulting in efficient and well-structured codebases.</p>
                    </motion.div>
                </motion.div>
                <motion.div id='card3' className='card' onClick={handleClick}>
                    <motion.img src={Node} alt='skills' id='node' whileHover={{ scale: 1.03, rotate: 360 }} transition={{ duration: 0.3 }}></motion.img>
                    <motion.div className='modal' id='node-card'>
                        <span class="close" onClick={handleClose}>&times;</span>
                        <h4>Node js</h4>
                        <p> Highly skilled in Node.js development, I harness its non-blocking I/O model to build high-performance and scalable server-side applications, ranging from RESTful APIs to real-time web services.</p>
                    </motion.div>
                </motion.div>
                <motion.div id='card4' className='card' onClick={handleClick}>
                    <motion.img src={Express} alt='skills' id='express' whileHover={{ scale: 1.03, rotate: 360 }} transition={{ duration: 0.3 }}></motion.img>
                    <motion.div className='modal' id='express-card'>
                        <span class="close" onClick={handleClose}>&times;</span>
                        <h4>Express js</h4>
                        <p>Proficient in Express.js, I leverage its minimalist framework to create lightweight and flexible web applications, implementing middleware for routing, authentication, and error handling.</p>
                    </motion.div>
                </motion.div>
                <motion.div id='card5' className='card' onClick={handleClick}>
                    <motion.img src={Mongo} alt='skills' id='mongo' whileHover={{ scale: 1.03, rotate: 360 }} transition={{ duration: 0.3 }}></motion.img>
                    <motion.div className='modal' id='mongo-card'>
                        <span class="close" onClick={handleClose}>&times;</span>
                        <h4>MongoDb/Mongoose</h4>
                        <p>Experienced in integrating various databases with Node.js, databases like MongoDB compass as well as MongoDB cloud for storing databse at server side to make it more accessible.I also work on Mongoose which is  a much flexible and advanced version.I optimize database queries and transactions for efficiency and reliability.</p>
                    </motion.div>
                </motion.div>
                <motion.div id='card6' className='card' onClick={handleClick}>
                    <motion.img src={Figma} alt='skills' id='figma' whileHover={{ scale: 1.03, rotate: 360 }} transition={{ duration: 0.3 }}></motion.img>
                    <motion.div className='modal' id='figma-card'>
                        <span class="close" onClick={handleClose}>&times;</span>
                        <h4>Figma</h4>
                        <p>Proficient in Figma's design tools and interface, I leverage its powerful features to create wireframes, prototypes, and high-fidelity designs with precision and efficiency. From artboards to components, I ensure consistency and scalability across design projects.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className='more'><p>Click on Icons to know more.</p></div>
        </motion.div>
    )
}

export default Skills
