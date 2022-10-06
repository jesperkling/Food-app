import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

const LogoutForm = () => {
    const navigate = useNavigate()
    const { logout } = useAuthContext()

    useEffect(() => {
        const logoutUser = async () => {
            await logout()
            navigate('/')
        }
        logoutUser()
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Logout</Card.Title>
                            <Card.Text>You are now logging out</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LogoutForm