import { useState, useEffect } from "react"
import { db } from '../firebase'
import { collection, onSnapshot, QueryConstraint } from 'firebase/firestore'

const useStreamCollection = (coll, ...QueryConstraint) => {
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const ref = collection(db, coll)


    }, [])
    
    return (
        <div></div>
    )
}

export default useStreamCollection