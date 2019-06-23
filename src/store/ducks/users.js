export const Types = {
	ADD_REQUEST: 'users:ADD_REQUEST',
	ADD_SUCCESS: 'users:ADD_SUCCESS',
	ADD_ERROR: 'users:ADD_ERROR',
	REMOVE: 'users:REMOVE'
}

const INITIAL_STATE = {
	isLoading: false,
	data: []
}

export default function users (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.ADD_REQUEST:
		return { ...state, isLoading: true }
	case Types.ADD_SUCCESS:
		return {
			...state,
			isLoading: false,
			data: [...state.data, action.payload.data]
		}
	case Types.ADD_ERROR:
		return { ...state, isLoading: false }

	case Types.REMOVE:
		return {
			...state,
			data: state.data.filter(user => user.id !== action.payload.id)
		}
	default:
		return state
	}
}

export const Creators = {
	addUserRequest: (name, latitude, longitude) => ({
		type: Types.ADD_REQUEST,
		payload: {
			name,
			latitude,
			longitude
		}
	}),
	addUserSuccess: data => ({
		type: Types.ADD_SUCCESS,
		payload: {
			data
		}
	}),
	addUserError: () => ({
		type: Types.ADD_ERROR
	}),
	removeUser: id => ({
		type: Types.REMOVE,
		payload: {
			id
		}
	})
}
