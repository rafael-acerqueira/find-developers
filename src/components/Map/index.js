import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Modal from '../GithubModal'
import { Creators as ModalActions } from '../../store/ducks/modal'

const Map = () => {
	const [viewport, setViewport] = useState({
		width: '100vw',
		height: '100vh',
		latitude: -10.9095,
		longitude: -37.0748,
		zoom: 14
	})

	const dispatch = useDispatch()

	const handleMapClick = e => {
		console.log(e.lngLat)
		dispatch(ModalActions.openModal())
	}

	return (
		<Fragment>
			<ReactMapGL
				{...viewport}
				onClick={handleMapClick}
				onViewportChange={viewport => setViewport(viewport)}
				mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
			/>
			<Modal />
		</Fragment>
	)
}

export default Map
