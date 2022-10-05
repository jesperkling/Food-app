import { GoogleMap, useJsApiLoader, Autocomplete } from "@react-google-maps/api"
import { useState } from "react"
import '../assets/scss/map.scss'

const libraries = ['places']

const GoogleMapAPI = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const [latitude, setLatitude] = useState(55.60)
    const [longitude, setLongitude] = useState(13)
    const [adress, setAdress] = useState('')

    return (
        <>
            <GoogleMap
                zoom={12}
				center={{
					lat: 55.60,
					lng: 13
				}}
				mapContainerClassName='map-container'
            ></GoogleMap>
        </>
    )
}

export default GoogleMapAPI