import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isExpired } from "react-jwt";

import Header from './components/common/header/header.js';

import Home from './components/Home/home';
import Movie from './components/Movie/movie';
import Login from './components/Login/login';
import SignUp from './components/Signup/signup';
import NotFound from './components/NotFound/notFound';
import AddMovie from './components/AddMovie/addMovie';

import Footer from './components/common/footer/footer';


function App() {
	return (
		<BrowserRouter className="App">
			<Header />
			<div className="header-footer">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/movie/:id" component={Movie} />
					<Route path="/login" component={Login} />
					<Route path="/signup" component={SignUp} />
					<Route path="/add" render={props => {
						if (isExpired(localStorage.getItem('token'))) {
							return <Redirect to="/" />;
						}
						return <AddMovie />;
					}} />
					<Route path="/not-found" component={NotFound} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
