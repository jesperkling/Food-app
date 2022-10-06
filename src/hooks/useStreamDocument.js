import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

const useStreamDocument = (col, id) => {
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)

    useEffect(() => {

        const ref = doc(db, col, id)

        const snap = onSnapshot(ref, snapshot => {
            setData({
                id: snapshot.id,
                ...snapshot.data()
            })
            setPending(false)
        })
        return snap
    }, [])

    return {
        data,
        pending
    }
}

export default useStreamDocument