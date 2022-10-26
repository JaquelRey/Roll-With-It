import { Link} from 'react-router-dom';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import BannerImage from '../../assets/dnd.jpg';
import DemoSheet from '../../assets/dndsheet.webp';
import 'bulma/css/bulma.min.css';

const Home = () => {
	return (
		<div className="Home">
			<div 
			className="headerContainer"
			 style={{backgroundImage: `url(${BannerImage })` }}
			 
			 >
				<h1>Just Roll with it</h1>
				<p>"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam,
					 quis nostrud exercitation ullamco 
					 laboris nisi ut aliquip ex ea 
					 commodo consequat"</p>
					 <link >
					 <button> CREATE CHARACTER</button>
					 </link>

			</div>
		
			<div className="demo-sheet">
      			<img src={DemoSheet} alt="dnd character sheet"/>
   			 </div> 
		</div>
	);
};

export default Home;
