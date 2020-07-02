import React from 'react'
import Home from './Home'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Redirect path='/:user' component={Home} />
			</Switch>
		</BrowserRouter>
	)
}
export default App
