import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './home.css'
import DemoSheet from '../../assets/dndsheet.webp';

const Home = () => {
	return (
		<div id='home' >
			<div className='parchment'>
				<div className='parchment-body'>
					<h1>Just Roll with it</h1>
					<p>"Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam,
						quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea
						commodo consequat"</p>
					<div >
						<button>YES CREATE CHARACTER</button>
					</div>
				</div>
			</div>

			<img src={DemoSheet} alt="dnd character sheet" />
		</div>
	);
};

export default Home;
