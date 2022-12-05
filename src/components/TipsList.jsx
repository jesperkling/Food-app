import { Button, ListGroup } from 'react-bootstrap'

const TipsList = ({ tips }) => {
    return (
        <ListGroup>
            {tips.map(tip => (
                <ListGroup.Item key={tip.id}>
                    {tip.message}
                    <Button>Delete</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default TipsList