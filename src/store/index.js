import { createStore, compose, applyMiddleware } from 'redux'

const store = createStore(
	() => {},
	compose(
		applyMiddleware(...[]),
		console.tron.createEnhancer()
	)
)

export default store
