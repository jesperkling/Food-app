import axios from 'axios'

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const getLatLng = async (address) => {
    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)

    const coordinates = res.data.results[0].geometry.location

    return coordinates
}

const exports = {
    getLatLng
}

export default exports