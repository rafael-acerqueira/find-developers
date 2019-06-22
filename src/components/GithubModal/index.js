import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'

import { Form, Button } from './styles'
import { Creators as ModalActions } from '../../store/ducks/modal'
import { Creators as UserActions } from '../../store/ducks/users'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
}

const GithubModal = ({ latitude, longitude }) => {
	const [userName, setUserName] = useState('')
	const showModal = useSelector(state => state.modal.isOpen)
	const isLoading = useSelector(state => state.users.isLoading)
	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(ModalActions.closemodal())
	}

	const handleAddUser = e => {
		e.preventDefault()
		dispatch(UserActions.addUserRequest(userName, latitude, longitude))
		setUserName('')
	}
	return (
		<Modal
			isOpen={showModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<Form onSubmit={handleAddUser}>
				<h2>Adicionar novo usuário</h2>
				<input
					type="text"
					placeholder="Usuário do Github"
					value={userName}
					onChange={e => setUserName(e.target.value)}
					autoFocus
				/>
				<div>
					<Button onClick={closeModal}>Cancelar</Button>
					<Button type="submit" submit>
						{isLoading ? 'Adicionando...' : 'Salvar'}
					</Button>
				</div>
			</Form>
		</Modal>
	)
}

Modal.setAppElement('#root')
export default GithubModal
