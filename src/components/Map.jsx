import GoogleMapAPI from '../services/GoogleMapAPI'
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"
import { useState } from "react"

const libraries = ['places']

const places = [{

}]

const Map = () => {
  const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
	})

	const [position, setPosition] = useState({ lat: 55.5833, lng: 13.0333 })

  return (
		<>
			{!isLoaded && <p>Loading...</p>}

			{isLoaded && (
				<>
					<GoogleMap
						zoom={12}
						center={position}
						mapContainerClassName='map-container'
					>
						<Marker position={position} /> 
					</GoogleMap>
				</>
			)}
		</>
	)
}

export default Map