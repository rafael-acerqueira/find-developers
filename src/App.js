import React from 'react'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/global'
import './config/reactotron'
import store from './store'
import Map from './components/Map'
import UserList from './components/UserList'

const App = () => (
	<Provider store={store}>
		<GlobalStyle />
		<UserList />
		<Map />
	</Provider>
)
export default App
