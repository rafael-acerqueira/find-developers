import { call, put, select } from 'redux-saga/effects'
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

		const isDuplicated = yield select(state =>
			state.users.data.find(user => user.id === data.id)
		)

		if (isDuplicated) {
			yield put(userActions.addUserError())
			toast.warn('This user was already added!', {
				position: toastPosition
			})
		} else {
			const userData = {
				id: data.id,
				name: data.name,
				login: data.login,
				avatar: data.avatar_url,
				latitude: action.payload.latitude,
				longitude: action.payload.longitude
			}

			yield put(userActions.addUserSuccess(userData))
			toast.success(`You successfully added ${userData.name}`, {
				position: toastPosition
			})
		}
	} catch (error) {
		yield put(userActions.addUserError())
		toast.error('An error occurred when you tried to add this user', {
			position: toastPosition
		})
	} finally {
		yield put(modalActions.closemodal())
	}
}
