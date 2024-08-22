import React from 'react'
import './navbar.css'
import {motion} from 'framer-motion'
import Sidebar from './Sidebar/Sidebar'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <div className='wrapper'>
        <motion.span className='span' initial={{opacity:0, scale:0.3}} animate={{opacity:1, scale:1}} transition={{duration:0.85}}>Shivangi Shandilya</motion.span>
        <div className='social'>
            <a href=''><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoMFtNYy-gfuvVnQkKSiDAmfYt0ynmaGz55WPNbUPZw&s' alt='facebook' /></a>
            <a href='https://github.com/Shivangii99' target="_blank"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9QyZFeCQ5cLuPAOfAUrQEwAkn6iI4u9kp_0667-TPw&s' alt='github' /></a>
            <a href='https://www.linkedin.com/in/shivangi-shandilya-7a0271230' target="_blank"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s' alt='linkedin' /></a>
            <a href=''><img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' alt='instagram' /></a>
            {/* <LinkedInIcon sx={{color:blue[700]}} />
            <GitHubIcon sx={{color: green[500]}} />
            <YouTubeIcon sx={{color: red[700]}} />
            <InstagramIcon sx={{color: pink}} /> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
