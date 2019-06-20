import React from 'react'
import { Provider } from 'react-redux'
import './config/reactotron'
import store from './store'
import Map from './components/Map'

const App = () => (
	<Provider store={store}>
		<Map />
	</Provider>
)
export default App
