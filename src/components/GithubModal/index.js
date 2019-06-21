import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'

import { Form, Button } from './styles'
import { Creators as ModalActions } from '../../store/ducks/modal'
import { Creators as RepositoryActions } from '../../store/ducks/repositories'

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
	const [repoName, setRepoName] = useState('')
	const showModal = useSelector(state => state.modal.isOpen)
	const isLoading = useSelector(state => state.repositories.isLoading)
	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(ModalActions.closemodal())
	}

	const handleAddRepository = e => {
		e.preventDefault()
		dispatch(
			RepositoryActions.addRepositoryRequest(repoName, latitude, longitude)
		)
	}
	return (
		<Modal
			isOpen={showModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<Form onSubmit={handleAddRepository}>
				<h2>Adicionar novo usuário</h2>
				<input
					type="text"
					placeholder="Usuário do Github"
					value={repoName}
					onChange={e => setRepoName(e.target.value)}
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
