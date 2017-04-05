import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import App from 'components'

const history = createHistory()
const mapStateToProps = state => (
	{
		state
	}
)

class Main extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Router history={ history }>
				<div>
					Main
					<Route path={ '/' } exact component={ App }/>
				</div>
			</Router>
		)
	}
}

export default connect(
	mapStateToProps
)(Main)
