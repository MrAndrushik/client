import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

function ItemPage() {
    const item = {id: 1, name: "Mizuno Wave Rider 24 кроссовки для бега", price: 8630, img: 'img/test.png' }
    return (
        <Container>
            <Row className='pb-5' style={{background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)', borderRadius: 10}}>
                <Col md={10}>
                    <h1>{item.name}</h1>
                    <p>Артикул J1GC2003 17</p>
                    <Image style={{width: 600}} src='../img/full.png' />
                </Col>
                <Col md={2}>
                    <p>Стоимость</p>
                    <p>{item.price}</p>
                    <Button>В корзину</Button>
                </Col>        
            </Row>
        </Container>
    )
}

export default ItemPage;