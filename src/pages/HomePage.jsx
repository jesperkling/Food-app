import GoogleMapAPI from '../services/GoogleMapAPI'
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { useState } from "react"
import SearchForm from "../components/SearchForm"
import '../assets/scss/map.scss'

const libraries = ['places']

const places = [{

}]

const HomePage = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
	})

	const [position, setPosition] = useState({ lat: 55, lng: 13 })

	const handleSubmit = async (address) => {
		if(!address) {
			return
		}

		const newCords = await GoogleMapAPI.getLatLng(address)
		console.log(newCords)

		setPosition(newCords)
	}

	return (
		<>
			{!isLoaded && <p>Loading...</p>}

			{isLoaded && (
				<>
					<SearchForm onSubmit={handleSubmit} />

					<GoogleMap
						zoom={12}
						center={position}
						mapContainerClassName='map-container'
					></GoogleMap>
				</>
			)}
		</>
	)
}

export default HomePage