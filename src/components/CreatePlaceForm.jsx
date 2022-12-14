import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Container, Form, Button } from 'react-bootstrap'

const CreatePlaceForm = ({ addOrUpdate, col, db }) => {
    const [pending, setPending] = useState(false)
    const {handleSubmit, register, formState: { errors }, reset} = useForm()

    const onAddPlace =  async place => {
        console.log(place)

        setPending(true)

        await addOrUpdate(col(db, 'restaurants'), {
            name: place.name,
            adress: place.adress,
            location: place.location,
            description: place.description,
            cuisine: place.cuisine,
            type: place.type,
            offers: place.offers
        })

        reset()

        reset({
            type: '',
            offers: ''
        })

        setPending(false)
    }
    
    return(
        <Container>
            <h1>Add place to list</h1>
            <Form noValidate onSubmit={handleSubmit(onAddPlace)}>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register('name', {
                        required: 'Name is required',
                        minLength: 2,
                    })} type='text' />
                    {errors.name && <span>{errors.name.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='adress'>
                    <Form.Label>Adress</Form.Label>
                    <Form.Control {...register('adress', {
                        required: 'Adress is required',
                        minLength: {
                            value: 2,
                            message: 'Adress too short'
                        }
                    })} type='text' />
                    {errors.adress && <span>{errors.adress.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='location'>
                    <Form.Label>Location</Form.Label>
                    <Form.Control {...register('location', {
                        required: 'Location is required',
                        minLength: {
                            value: 2,
                            message: 'Location too short'
                        }
                    })} type='text' />
                    {errors.location && <span>{errors.location.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control {...register('description', {
                        required: 'Description is required',
                        minLength: {
                            value: 4,
                            message: 'Description is too short'
                        }
                    })} type='text' />
                    {errors.description && <span>{errors.description.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='cuisine'>
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Control {...register('cuisine', {
                        required: 'Cuisine is required',
                        minLength: 4,                        
                    })} type='text' />
                    {errors.cuisine && <span>{errors.cuisine.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='type'>
                    <Form.Label>Type of place</Form.Label>
                    <select {...register('type', {
                        required: 'Type is required'
                    })} className='form-select'>
                        <option value='cafe'>Cafe</option>
                        <option value='restaurant'>Restaurant</option>
                        <option value='fastfood'>Fastfood</option>
                        <option value='grill'>Kiosk/Grill</option>
                        <option value='foodtruck'>Foodtruck</option>
                    </select>
                    {errors.type && <span>{errors.type.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='offers'>
                    <Form.Label>Offers</Form.Label>
                    <select {...register('offers', {
                        required: 'Offers is required'
                    })} className='form-select'>
                        <option value='lunch'>Lunch</option>
                        <option value='afterwork'>After Work</option>
                        <option value='dinner'>Dinner</option>
                    </select>
                </Form.Group>

                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control {...register('email')} type='email' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='phone'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control {...register('phone')} type='phone' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='homepage'>
                    <Form.Label>Homepage</Form.Label>
                    <Form.Control {...register('homepage')} type='text' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='facebook'>
                    <Form.Label>Facebook</Form.Label>
                    <Form.Control {...register('facebook')} type='text' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='instagram'>
                    <Form.Label>Instagram</Form.Label>
                    <Form.Control {...register('instagram')} type='text' />
                </Form.Group>

                <Button disabled={pending} type='submit'>
                    {pending ? '...adding' : 'Add'}
                </Button>
            </Form>
        </Container>
    )
}

export default CreatePlaceForm