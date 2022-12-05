import Container from 'react-bootstrap/Container'
import useStreamCollection from '../hooks/useStreamCollection'
import { orderBy } from 'firebase/firestore'
import TipsList from '../components/TipsList'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TipsPage = () => {
    const { data, pending } = useStreamCollection('tips', orderBy('created'))
    return (
        <Container>
            <h3>Tips:</h3>
            {pending && <div>Loading...</div>}
            {!pending && data && <TipsList tips={data} />}
        </Container>
    )
}

export default TipsPage