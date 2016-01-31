import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>hello world</h1>
				{this.props.children}
			</div>
		)
	}
}

class NoMatch extends React.Component {
	render() {
		return (
			<h2>404 not found</h2>
		)
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
), document.getElementById("app"));