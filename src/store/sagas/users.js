import { call, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../services/api'

import { Creators as userActions } from '../ducks/users'
import { Creators as modalActions } from '../ducks/modal'

import 'react-toastify/dist/ReactToastify.css'
toast.configure()
export function * addUser (action) {
	const toastPosition = toast.POSITION.TOP_CENTER
	try {
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
		toast.success(`You successfully added ${userData.name}`, {
			position: toastPosition
		})
	} catch (error) {
		yield put(userActions.addUserError())
		yield put(modalActions.closemodal())
		toast.error('An error occurred when you tried to add this user', {
			position: toastPosition
		})
	}
}
