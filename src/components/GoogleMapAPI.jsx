import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import '../assets/scss/map.scss'
import { useState } from "react"

const libraries = ['places']

const GoogleMapAPI = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries
    })

    const [latitude, setLatitude] = useState(55.60)
    const [longitude, setLongitude] = useState(13)

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null,
    })

    const [address, setAddress] = useState('')

    if (isLoaded) {
        if(address) {
            setAddress(address.label)

            if(typeof address === 'string') {
                geocodeByAddress(address)
                    .then(results => getLatLng(results[0]))
                    .then(({ lat, lng })=> 
                    console.log('lat, lng', { lat, lng })
                ) 
            }
        }

        return (
            <>
                <GoogleMap
                    zoom={12}
                    center={{
                        lat: latitude,
                        lng: longitude
                    }}
                    mapContainerClassName='map-container'
                ></GoogleMap>

                <div className="inputStyle">
                    <GooglePlacesAutocomplete
                        selectProps={{
                            address,
                            onChange: setAddress,
                            placeholder: 'Enter address...'
                        }}
                    >
                    </GooglePlacesAutocomplete>
                </div>
            </>  
        )
    }
}

export default GoogleMapAPI