import React,{ useState } from "react";
import {HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion } from 'framer-motion'


import {images} from '../../constants'
import './Navbar.scss'
import styles from './navbar.module.css'


const Navbar=()=>{
	const [toggle ,setToggle] =useState(false);


	return(
		// <nav className="app__navbar" >
		<nav className={styles.app__navbar} >

			<div className="app__navbar-logo"> 
				<img src={images.logo1} alt="" />	
			</div>


{/* Creating  array of Object Menue link of HOME ABOUT, SKILL WORK CONTACT */}
			<ul className="app__navbar-links" >
				{[
					'home','about','work','skills', 'contact'
				].map((item)=> (
					<li className="app__flex p.text" key={ `link-${item}` }> 
					<div />
					<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>



{/* Ceating manu collapse and expands */}
					<div className="app__navbar-menu">
					{/*  creating HiMenuAlt4 with on click function*/}

					<HiMenuAlt4 onClick={() => setToggle(true)} /> 
					{/* Checking  toggle condition */}

					{toggle && (
						// use motion icons here
						<motion.div whileInView={{x:[300,0]}} transition={{duration:0.89, ease:'easeInOut'}}>
							{/* create HiX function */}
							<HiX onClick={() => setToggle(false)}/>

							<ul>
								{['home','about', 'skills ','work', 'contact'].map((item)=>(
									<li key={item}>
										<a href={`#${item}`}  onClick={()=>setToggle(false)} >{item}</a>
									</li>
								))}

							</ul>
						</motion.div>
					)}
					</div>
		</nav>
	)
}
export default Navbar;