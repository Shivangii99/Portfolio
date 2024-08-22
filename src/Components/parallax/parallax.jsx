import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import './parallax.css'
import {motion , useScroll, useTransform} from 'framer-motion'
import Node from './node.jpg'
import logo from './react.png'
import Html from './html.png'
import Express from './express.png'
import Mongo from './mongo.jpg'
import Figma from './figma.png'

const Parallax = () => {
  // const ref = useRef();

  // // const {scrollYProgress} = useScroll({
  // //   target:ref,
  // //   // offset:["start start" , "end start"]
  // })
  // const ybg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  // const yText = useTransform(scrollYProgress, [0,1], ["0%", "400%"]);

  // const photos = [
  //   {
  //     id:1,
  //     head:"HTML, CSS, JavaScript",
  //     pic: Html,
  //   },
  //   {
  //     id:2,
  //     head:"React/Redux/Material UI",
  //     pic: logo,
  //   },
  //   {
  //     id:3,
  //     head:"Node js",
  //     pic: Node,
  //   },
  //   {
  //     id:4,
  //     head:"Express js",
  //     pic: Express,
  //   },
  //   {
  //     id:5,
  //     head:"MongoDb Compass/MongoDb Cloud/Mongoose",
  //     pic: Mongo,
  //   },
  //   {
  //     id:6,
  //     head:"Figma",
  //     pic: Figma,
  //   }
  // ]

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
    bgcolor: 'background.paper',
    border: '0.8px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const style2 = {
    marginTop: 2,
    color: "black",
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <motion.div className='parallax' >
        <motion.div className='h1' >
          <h1>Skills</h1>
        </motion.div>
        <div className='container'>
        <div>
        <div className='image'>
          <img src={Html} alt='skills' onClick={handleOpen}></img>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"darkblue"}}>
            HTML, CSS, JavaScript
          </Typography>
          <Typography id="modal-modal-description" sx={style2}>
            <ul>
              <li> Fluent in semantic markup, I leverage the latest HTML5 standards to structure content in a meaningful way, ensuring accessibility and SEO optimization.</li>
              <li>Mastery in CSS styling techniques enables me to create stunning visual designs, utilizing CSS preprocessors like Sass to streamline development and maintainability.</li>
              <li>With a strong command of JavaScript, I bring interactivity and functionality to websites, from implementing complex animations to integrating third-party APIs seamlessly.</li>
            </ul>
          </Typography>
        </Box>
      </Modal>
      </div>
      <div>
        <div className='image'>
          <img src={logo} alt='skills' onClick={handleOpen}></img>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"darkblue"}}>
            React
          </Typography>
          <Typography id="modal-modal-description" sx={style2}>
          Highly skilled in React development, I leverage its component-based architecture, Hooks, React Routers and Material UI to create modular and reusable UI elements, resulting in efficient and well-structured codebases.
          </Typography>
        </Box>
      </Modal>
      </div>
      <div>
        <div className='image'>
          <img src={Node} alt='skills' onClick={handleOpen}></img>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"darkblue"}}>
            Node js
          </Typography>
          <Typography id="modal-modal-description" sx={style2}>
          Highly skilled in Node.js development, I harness its non-blocking I/O model to build high-performance and scalable server-side applications, ranging from RESTful APIs to real-time web services.
          </Typography>
        </Box>
      </Modal>
      </div>
      <div>
        <div className='image'>
          <img src={Express} alt='skills' onClick={handleOpen}></img>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"darkblue"}}>
            Express js
          </Typography>
          <Typography id="modal-modal-description" sx={style2}>
          Proficient in Express.js, I leverage its minimalist framework to create lightweight and flexible web applications, implementing middleware for routing, authentication, and error handling.
          </Typography>
        </Box>
      </Modal>
      </div>
      <div>
        <div className='image'>
          <img src={Mongo} alt='skills' onClick={handleOpen}></img>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"darkblue"}}>
            MongoDB compass/MongoDB cloud/Mongoose
          </Typography>
          <Typography id="modal-modal-description" sx={style2}>
          Experienced in integrating various databases with Node.js, databases like MongoDB compass as well as MongoDB cloud for storing databse at server side to make it more accessible.I also work on Mongoose which is  a much flexible and advanced version.I optimize database queries and transactions for efficiency and reliability.
          </Typography>
        </Box>
      </Modal>
      </div>
      <div>
        <div className='image'>
          <img src={Figma} alt='skills' onClick={handleOpen}></img>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"darkblue"}}>
            Figma
          </Typography>
          <Typography id="modal-modal-description" sx={style2}>
          Proficient in Figma's design tools and interface, I leverage its powerful features to create wireframes, prototypes, and high-fidelity designs with precision and efficiency. From artboards to components, I ensure consistency and scalability across design projects.
          </Typography>
        </Box>
      </Modal>
      </div>
      </div>
        {/* <motion.div className='mountains' ></motion.div>
        <motion.div className='stars'></motion.div> */}
    </motion.div>
  )
}

export default Parallax;
