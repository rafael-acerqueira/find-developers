export const Types = {
	ADD_REQUEST: 'users:ADD_REQUEST',
	ADD_SUCCESS: 'users:ADD_SUCCESS'
}

const INITIAL_STATE = {
	isLoading: false,
	error: false,
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
	})
}
