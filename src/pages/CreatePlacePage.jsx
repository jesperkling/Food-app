import React from 'react'
import { useForm } from 'react-hook-form'
import { Container, Form, Button } from 'react-bootstrap'

function CreatePlacePage() {
    const {handleSubmit} = useForm()

  return (
    <Container>
        <h1>Add place to list</h1>
        <Form noValidate>
            <Form.Group className='mb-3' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='adress'>
                <Form.Label>Adress</Form.Label>
                <Form.Control type='text' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='location'>
                <Form.Label>Location</Form.Label>
                <Form.Control type='text' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='type'>
                <Form.Label>Type of place</Form.Label>
                <select className='form-select'>
                    <option value='cafe'>Cafe</option>
                    <option value='restaurant'>Restaurant</option>
                    <option value='fastfood'>Fastfood</option>
                    <option value='grill'>Kiosk/Grill</option>
                    <option value='foodtruck'>Foodtruck</option>
                </select>
            </Form.Group>

            <Form.Group className='mb-3' controlId='offers'>
                <Form.Label>Offers</Form.Label>
                <select className='form-select'>
                    <option value='lunch'>Lunch</option>
                    <option value='afterwork'>After Work</option>
                    <option value='dinner'>Dinner</option>
                </select>
            </Form.Group>

            <Button type='submit'>Add</Button>
        </Form>
    </Container>
  )
}

export default CreatePlacePage