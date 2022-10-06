import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { useState } from "react"
import '../assets/scss/map.scss'

const libraries = ['places']

const GoogleMapAPI = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const [latitude, setLatitude] = useState(55.60)
    const [longitude, setLongitude] = useState(13)

    return (
        isLoaded && (
            <GoogleMap
            zoom={12}
			center={{
				lat: latitude,
				lng: longitude
			}}
			mapContainerClassName='map-container'
            ></GoogleMap>
        )
        
    )
}

export default GoogleMapAPI