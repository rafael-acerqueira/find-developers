export const Types = {
	ADD_REQUEST: 'repositories:ADD_REQUEST'
}

const INITIAL_STATE = {
	isLoading: false,
	error: false,
	data: []
}

export default function repositories (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.ADD_REQUEST:
		return { ...state, isLoading: true }

	default:
		return state
	}
}

export const Creators = {
	addRepositoryRequest: (repoName, latitude, longitude) => ({
		type: Types.ADD_REQUEST,
		payload: {
			repoName,
			latitude,
			longitude
		}
	})
}
