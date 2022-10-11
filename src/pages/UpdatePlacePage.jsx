import React from 'react'
import UpdatePlaceForm from '../components/UpdatePlaceForm'
import useStreamDocument from '../hooks/useStreamDocument'

const UpdatePlacePage = () => {
    const { data, pending } = useStreamDocument('restaurants', 'C9G7DB7CXhp1BFbjguI8')

    return (
        <>
            {pending && <span>Loading place...</span>}

            <UpdatePlaceForm thisPlace={data} />

            {!pending && !data && <span>Place not found</span>}
        </>
    )
}

export default UpdatePlacePage