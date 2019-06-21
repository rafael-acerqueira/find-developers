import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'

import { Creators as ModalActions } from '../../store/ducks/modal'

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

const GithubModal = () => {
	const [repoName, setRepoName] = useState('')
	const showModal = useSelector(state => state.modal.isOpen)
	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(ModalActions.closemodal())
	}

	const handleAddRepository = e => {
		e.preventDefault()
		console.log(repoName)
	}
	return (
		<Modal
			isOpen={showModal}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<h2>Adicionar novo usuário</h2>
			<form onSubmit={handleAddRepository}>
				<input
					type="text"
					placeholder="Usuário do Github"
					value={repoName}
					onChange={e => setRepoName(e.target.value)}
				/>
				<button type="submit">Salvar</button>
				<button onClick={closeModal}>Cancelar</button>
			</form>
		</Modal>
	)
}

Modal.setAppElement('#root')
export default GithubModal
