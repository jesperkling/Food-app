import { doc, updateDoc } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import {db} from '../firebase'
import { Container, Form, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import useStreamDocument from '../hooks/useStreamDocument'

const UpdatePlacePage = ({ thisPlace }) => {
    const {handleSubmit, register, formState: { errors }} = useForm()
    const [loading, setLoading] = useState(false)
    const { data, pending } = useStreamDocument('restaurants')

    const onUpdatePlace = async place => {
        console.log(place)

        await updateDoc(doc(db, 'restaurants', thisPlace.id), {
            name: place.name,
            adress: place.adress,
            location: place.location,
            description: place.description,
            cuisine: place.cuisine,
            type: place.type,
            offers: place.offers
        })
    }

    return (
        <Container>
            <h1>Update place</h1>
            <Form noValidate onSubmit={handleSubmit(onUpdatePlace)}>
                <Form.Group className='mb-3' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register('name', {
                        required: 'Name is required',
                        minLength: 2,
                    })} 
                    type='text'
                    defaultValue={thisPlace.name} />
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
                    })} 
                    type='text'
                    defaultValue={thisPlace.adress} />
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
                    })} 
                    type='text'
                    defaultValue={thisPlace.location} />
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
                    })} 
                    type='text'
                    defaultValue={thisPlace.description} />
                    {errors.description && <span>{errors.description.message}</span>}
                </Form.Group>

                <Form.Group className='mb-3' controlId='cuisine'>
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Control {...register('cuisine', {
                        required: 'Cuisine is required',
                        minLength: 4,                        
                    })} 
                    type='text'
                    defaultValue={thisPlace.cuisine} />
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

                <Button disabled={loading} type='submit'>
                    {loading ? '...updating' : 'Update'}
                </Button>
            </Form>
        </Container>
    )
}

export default UpdatePlacePage