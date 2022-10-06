import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import '../assets/scss/map.scss'
import { useState } from "react"

const GoogleMapAPI = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    })

    const [latitude, setLatitude] = useState(55.60)
    const [longitude, setLongitude] = useState(13)

    if (isLoaded) {
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
}

export default GoogleMapAPI