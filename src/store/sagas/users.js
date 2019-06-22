import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as userActions } from '../ducks/users'
import { Creators as modalActions } from '../ducks/modal'

export function * addUser (action) {
	const { data } = yield call(api.get, `/users/${action.payload.name}`)

	const userData = {
		id: data.id,
		name: data.name,
		login: data.login,
		avatar: data.avatar_url,
		latitude: action.payload.latitude,
		longitude: action.payload.longitude
	}

	yield put(userActions.addUserSuccess(userData))
	yield put(modalActions.closemodal())
}
