export const Types = {
	OPEN: 'modal:OPEN',
	CLOSE: 'modal:CLOSE'
}

const INITIAL_STATE = {
	isOpen: false
}

export default function modal (state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.OPEN:
		return { ...state, isOpen: true }
	case Types.CLOSE:
		return { ...state, isOpen: false }
	default:
		return state
	}
}

export const Creators = {
	openModal: () => ({
		type: Types.OPEN
	}),

	closemodal: () => ({
		type: Types.CLOSE
	})
}
