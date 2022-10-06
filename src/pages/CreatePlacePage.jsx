import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import CreatePlaceForm from '../components/CreatePlaceForm'

const CreatePlacePage = () => {
  return (
    <CreatePlaceForm add={addDoc} col={collection} db={db} />
  )
}

export default CreatePlacePage