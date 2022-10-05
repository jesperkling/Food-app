import React, { useState, useRef } from 'react'
import { Button, Card, Container, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'


const LoginPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const { login } = useAuthContext()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            setPending(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')

        } catch (err) {
            setError(err.message)
            setPending(false)
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            {error && <span>{error}</span>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' ref={emailRef} required />
                                </Form.Group>

                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' ref={passwordRef} required />
                                </Form.Group>

                                <Button disabled={pending} type='submit'>Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage
