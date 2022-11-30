import { useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Autocomplete } from '@react-google-maps/api'

const SearchForm = ({ onSubmit }) => {

    const ref = useRef()

    const handleForm = (e) => {
        e.preventDefault()

        if(!ref.current.value) {
            console.log(ref.current.value)
            return
        }

        onSubmit(ref.current.value)
    }


    return (
        <Form onSubmit={handleForm}>
            <Form.Group className='d-flex justify-content-center'>
                <Autocomplete>
                    <Form.Control 
                        type='text'
                        ref={ref}
                        placeholder='Enter address'
                        required
                    />
                </Autocomplete>
                <Button type='submit' variant='primary'>Search</Button>
            </Form.Group>
        </Form>
    )
}

export default SearchForm