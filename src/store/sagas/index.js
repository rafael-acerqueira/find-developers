import { all, takeLatest } from 'redux-saga/effects'
import { Types } from '../ducks/users'
import { addUser } from './users'

export default function * rootSaga () {
	yield all([takeLatest(Types.ADD_REQUEST, addUser)])
}
