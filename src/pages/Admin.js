import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Admin = () => {
    return ( 
        <Container>
            <Button className='mb-3' variant='outline-dark'>Добавить тип</Button>
            <Button className='mb-3' variant='outline-dark'>Добавить бренд</Button>
            <Button className='mb-3' variant='outline-dark'>Добавить товар</Button>
        </Container>
    )
}

export default Admin;
