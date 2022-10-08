import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { Container, Form, Button } from 'react-bootstrap'

const CreateTipsForm = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm()
    const [pending, setPending] = useState(false)

    const onNewTip = async (data) => {
        await addDoc(collection(db, 'tips'), {
            message: data.message,
            created: serverTimestamp(),
        })
        reset()
        setPending(false)
    }

    return (
        <Container>
            <h1>Tips us of a place</h1>    
            
            <Form noValidate onSubmit={handleSubmit(onNewTip)}>
                <Form.Group>
                    <Form.Control {...register('message', {
                        required: 'Message required',
                        minLength: {
                            value: 5,
                            message: 'Message too short'
                        },
                    })} as='textarea' rows={6} />
                    {errors.message && <span>{errors.message.message}</span>}
                </Form.Group>

                <Button disabled={pending} type='submit'>
                    {pending ? '...sending' : 'Send'}
                </Button>
            </Form>
        </Container>
    )
}

export default CreateTipsForm