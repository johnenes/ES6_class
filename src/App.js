import React from 'react';


///importing all the container file for GUI 
//To minimax clustering we used customer way of importing those files

import { About, Contact,Header,Footer,Work,Testimonial, Brand, Skill } from './container';
import {Navbar} from './components';
import './App.scss';


 

const App =()=>{

        return (

            <div className='app'>
                <Navbar/>
				<Header/>
				<About/>
				<Contact/>
				<Work/>
				<Brand/>
				<Skill/>
				<Testimonial/>
				<Footer/>
		
            </div>
        )

}

export default App;
