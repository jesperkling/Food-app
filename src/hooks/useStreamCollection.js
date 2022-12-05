import { useState, useEffect } from "react"
import { db } from '../firebase'
import { collection, onSnapshot, query } from 'firebase/firestore'

const useStreamCollection = (coll, ...QueryConstraint) => {
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)

    useEffect(() => {
        const ref = collection(db, coll)

        const list = query(ref, ...QueryConstraint)

        const snap = onSnapshot(list, (snapshot) => {
            const docs = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setData(docs)
            setPending(false)
        })
    }, [])
    
    return {
        data,
        pending,
    }
}

export default useStreamCollection