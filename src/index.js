import React from 'react'
import { render } from 'react-dom'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import store from './reducers'
import Main from 'components/main'

const middleware = [
	thunk,
	routerMiddleware(history)
]

let appStore = createStore(
	store,
	applyMiddleware(...middleware)
)

render(
	<Provider store={appStore}>
		<Main/>
	</Provider>,
	document.getElementById('app')
)
