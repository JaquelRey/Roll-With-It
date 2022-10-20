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
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';

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
				<div>
					<AppProvider>
						<Nav />
						<Routes>
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
								path="*"
								element={<NoMatch />}
							/>
						</Routes>
					</AppProvider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
