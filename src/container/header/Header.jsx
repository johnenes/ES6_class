import React from 'react';
import {easeInOut, motion} from 'framer-motion'

import {images} from '../../constants'
import './Header.scss';

const scaleVariants={
    whileInView:{
        scale:[0,1], opacity:[0,1],
        transition:{
            duration:1,
            ease:'easeInOut'
        }
    }
}

const Header = () =>{

    return (
        <div id='home' className='app__header app__flex'>
            <motion.div 
            //motion div containing property
                whileInView={{x:[-100,0],opacity:[0,1]}}
                transition={{duration:5}}
                className=" app_header-info" >

                {/* div class of app_header-badge contains within motion div  */}
                <div className=' app__header-badge'>
                    <div className='badge-cmp app_flex'>
                        <span>👋</span>                        
                        <div style={{marginLeft:30}}>
                            <p  className='p-text'>Hello, I am</p>
                            <h1 className='head-text'>John Eneojo</h1>
                        </div>
                    </div> {/* end of div badge-cmp */}

                    {/* second container */}
                 <div className='tag-cmp app__flex'>
                    <p className='p-text'>Cyber Security Expert </p>
                    <p className='p-text'>Software Engineer </p>
                 </div>
                
                </div>  {/* end of the app__header-badge */}
            </motion.div> {/* end of the first motion container */}



        {/**
         * <motion div handles img profile it contain img tag and motion images */ }
            <motion.div
                whileInView={{opacity:[0,1]}}
                transition={{duration: 0.5, delayChildren : 0.5 }}
                className='app__header-img' 
            >
                <img src={images.profile} alt="profile_bg" />
                 
                 <motion.img
                    whileInView={{scale :[0,1]}}
                    transition={{duration: 1 , ease:easeInOut }}
                    src={images.circle} alt="profile_circel"
                    className='overlay-circle'

                 /> 
                 </motion.div>


        {/* this contain list of skills logs on the home page  */}
                 <motion.div
                     variants={scaleVariants}
                     whileInView={scaleVariants.whileInView  }
                     transition={{duration: 1 , ease:easeInOut }}
                     className='app__header-circle'
                 >
                    {[ images.css,images.javascript,images.git, images.html].map((circle , index)=>(

                        <div className='circle-cmp app__flex' key={`circle${index}`}>
                            <img src={circle} alt='circle'/>
                        </div>
                    ))}

                </motion.div>   
        </div>
    )
}
export default Header;
