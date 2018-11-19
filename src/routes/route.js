import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect,HashRouter} from 'react-router-dom';
import Home from '../pages/Home.js';
import Buycar from '../pages/Buycar.js';
import Detail from '../pages/Detail.js'
import My from '../pages/My.js';
import About from '../pages/About.js';

export default class Routers extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Route exact path="/"  component={Home} />
					<Route path="/home"  component={Home} />
					<Route path="/buycar" component={Buycar} />
					<Route path="/my" component={My} />
					<Route path="/detail/:id/:type" component={Detail} />
					<Route path="/about" component={About} />
					
				 </div>
			</HashRouter>

		)
	}
}

