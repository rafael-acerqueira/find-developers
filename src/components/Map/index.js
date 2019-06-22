import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactMapGL, { Marker } from 'react-map-gl'
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

	const [latitude, setLatitude] = useState('')
	const [longitude, setLongitude] = useState('')

	const markers = useSelector(state => state.users.data)
	const dispatch = useDispatch()
	const handleMapClick = e => {
		setLongitude(e.lngLat[0])
		setLatitude(e.lngLat[1])
		dispatch(ModalActions.openModal())
	}
	return (
		<Fragment>
			<ReactMapGL
				{...viewport}
				onClick={handleMapClick}
				onViewportChange={viewport => setViewport(viewport)}
				mapStyle="mapbox://styles/mapbox/basic-v9"
				mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
			>
				{markers.map(marker => (
					<Marker
						key={marker.id}
						latitude={marker.latitude}
						longitude={marker.longitude}
						onClick={handleMapClick}
						captureClick={true}
					>
						<img
							style={{
								width: 50,
								height: 50,
								borderRadius: 100,
								border: '3px solid #000'
							}}
							src={marker.avatar}
							alt="avatar"
						/>
					</Marker>
				))}
			</ReactMapGL>
			<Modal latitude={latitude} longitude={longitude} />
		</Fragment>
	)
}

export default Map
