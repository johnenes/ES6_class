import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

 import {images} from '../../constants'
import './About.scss';
// import { click } from '@testing-library/user-event/dist/click';



const about = [
		{title:'Cyber Security Expert', description:'Pen Tester',imagUrl:images.about04	},	 
		{title:'Frontend developer', description:'I am a good frontend',imagUrl:images.about02},
		{title:'FullStack Developer', description:'I am a good FullStack Developer',imagUrl:images.about03},
];

// import {urlFor,client} from '../../client';




const About=()=>{

	// //this handle the sanity model
	// const [abouts, setAbouts] = useState([]);

	// useEffect(() =>{
	// 	const query = '*[_type =="abouts"]';
	// 	client.fetch(query)  
	// 	.then((data) => setAbouts(data))
	// },[])
	
	
	

	return (

		
		<>
		<h2 className='head-text'> I kown that <span>Good Dev</span><br/ >means <span>Good Business</span></h2>
		
		<div className='app__profiles'>
			{ about.map((about,index) =>(
				<motion.div
					whileInView={{opacity:1}}
 					whileHover={{scale:1.1}}
					transition={{duration:0.5, type:'tween'}}
					className='app__profiles-item'
					key={about.title + index}
				>
					
				{/* <img src={urlFor(about.imagUrl)} alt ={about.title} /> */}
				<img src={about.imagUrl} alt ={about.title} />

				<h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
				<p className='p-text' style={{marginTop:10}}>{about.description}</p>			
				</motion.div>
			)) }
		</div>
		</>
	)
}
export default About 
