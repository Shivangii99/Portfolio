import React, { useRef } from 'react'
import './contact.css'
import {motion, useInView} from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const isInView = useInView(ref)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_hyfd8cy', 'template_f30xjzb', formRef.current, {
            publicKey: 'MyG3HOXpnQVd5SKfB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert("Message sent successfully");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <motion.div className='contact' ref={ref}>
            <div className='text'>
            <h1>Let's Work together</h1>
                <div>
                    <h4>Mail</h4>
                    <span>shandilyashivngi24@gmail.com</span>
                </div>
                <div>
                    <h4>Address</h4>
                    <span>Akash Enclave, Telibagh, Lucknow</span>
                </div>
                <div>
                    <h4>Contact no.</h4>
                    <span>9140074144</span>
                </div>
                
            </div>
            <div className='form'>
                <motion.div className="phonesvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="300" height="320" color="#40e5c1" fill="none">
    <motion.path initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:3}}  d="M4.74038 14.3685L6.69351 12.9816C7.24445 12.5904 7.80305 12.3282 8.44034 12.1585C9.17201 11.9636 9.5 11.5644 9.5 10.711C9.5 8.54628 14.5 8.31594 14.5 10.711C14.5 11.5644 14.828 11.9636 15.5597 12.1585C16.202 12.3295 16.7599 12.5934 17.3065 12.9816L19.2596 14.3685C20.1434 14.9961 20.5547 15.2995 20.7842 15.7819C21 16.2358 21 16.768 21 17.8324C21 19.7461 21 20.703 20.4642 21.3164C19.8152 22.0593 18.128 21.9955 17.0917 21.9955H6.90833C5.87197 21.9955 4.21909 22.0986 3.5358 21.3164C3 20.703 3 19.7461 3 17.8324C3 16.768 3 16.2358 3.21584 15.7819C3.44526 15.2995 3.85662 14.9961 4.74038 14.3685Z" stroke="currentColor" stroke-width="1.5" />
    <motion.path initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:3}} d="M14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 15.8954 10.8954 15 12 15C13.1046 15 14 15.8954 14 17Z" stroke="currentColor" stroke-width="1.5" />
    <motion.path initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{duration:3}} d="M6.96014 3.69772C5.6417 4.07415 4.69384 4.54112 3.82645 5.10455C2.45318 5.9966 1.86443 7.60404 2.02607 9.15513C2.09439 9.81068 2.62064 10.1241 3.23089 9.95455C3.69451 9.82571 4.15888 9.7003 4.61961 9.56364C5.96706 9.16397 6.28399 8.67812 6.47124 7.29885L6.96014 3.69772ZM6.96014 3.69772C10.2186 2.76743 13.7814 2.76743 17.0399 3.69772M17.0399 3.69772C18.3583 4.07415 19.3062 4.54112 20.1735 5.10455C21.5468 5.9966 22.1356 7.60404 21.9739 9.15513C21.9056 9.81068 21.3794 10.1241 20.7691 9.95455C20.3055 9.82571 19.8411 9.7003 19.3804 9.56364C18.0329 9.16397 17.716 8.67812 17.5288 7.29885L17.0399 3.69772Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>
                </motion.div>
                <motion.form ref={formRef}
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay:4, duration:1}}
                onSubmit={sendEmail}>
                    <input type='text' placeholder='Name' name='userName' required></input>
                    <input type='email' placeholder='Email' name='email' required></input>
                    <textarea rows={5} cols={50} placeholder='Message' name='message'></textarea>
                    <button>Send</button>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
