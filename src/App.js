import React from 'react'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/global'
import './config/reactotron'
import store from './store'
import Map from './components/Map'

const App = () => (
	<Provider store={store}>
		<GlobalStyle />
		<Map />
	</Provider>
)
export default App
