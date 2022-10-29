import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { AppProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Login from './pages/Login';
import CharacterViewEdit from './pages/CharacterViewEdit';
import Header from './components/Header';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
import Footer from './components/Footer';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className='screen'>
					<AppProvider >
						<Header />
						<Routes className='TEST'>
							<Route
								path="/"
								element={<Home />}
							/>
							<Route
								path="/login"
								element={<Login />}
							/>
							<Route
								path="/signup"
								element={<Signup />}
							/>
							<Route 
							path='/character'
							element={<CharacterViewEdit />}
							/>
							<Route
								path="*"
								element={<NoMatch />}
							/>
						</Routes>
						<Footer />
					</AppProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
