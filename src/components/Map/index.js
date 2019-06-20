import React from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const viewport = {
	width: window.innerWidth,
	height: window.innerHeight,
	latitude: -10.9095,
	longitude: -37.0748,
	zoom: 14
}

const handleMapClick = e => {
	console.log(e.lngLat)
}

const Map = () => {
	return (
		<ReactMapGL
			{...viewport}
			onClick={handleMapClick}
			// onViewportChange={viewport => setViewport(viewport)}
			mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
		/>
	)
}

export default Map
