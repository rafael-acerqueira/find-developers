import React, { Fragment, useState } from 'react'
import ReactMapGL from 'react-map-gl'
import Modal from 'react-modal'
import 'mapbox-gl/dist/mapbox-gl.css'

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

const Map = () => {
	const [viewport, setViewport] = useState({
		width: '100vw',
		height: '100vh',
		latitude: -10.9095,
		longitude: -37.0748,
		zoom: 14
	})

	const [showModal, setShowModal] = useState(false)
	const [repoName, setRepoName] = useState('')

	const handleAddRepository = e => {
		e.preventDefault()
		console.log(repoName)
	}

	const handleMapClick = e => {
		console.log(e.lngLat)
		setShowModal(true)
	}

	return (
		<Fragment>
			<ReactMapGL
				{...viewport}
				onClick={handleMapClick}
				onViewportChange={viewport => setViewport(viewport)}
				mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
			/>
			<Modal
				isOpen={showModal}
				onRequestClose={() => setShowModal(false)}
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
					<button onClick={() => setShowModal(false)}>Cancelar</button>
				</form>
			</Modal>
		</Fragment>
	)
}

Modal.setAppElement('#root')
export default Map
