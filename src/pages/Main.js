import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ItemList from '../components/ItemList';

function Main() {
    return ( 
        <main className='main'>
            <Container>
                <Row className='mt-4'>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div className="box"></div>
                        <p className='box__text'>Широкий выбор спортивной одежды, обуви и термобелья</p>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div className="box"></div>
                        <p className='box__text'>Широкий выбор спортивной одежды, обуви и термобелья</p>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center'>
                        <div className="box"></div>
                        <p className='box__text'>Широкий выбор спортивной одежды, обуви и термобелья</p>
                    </Col>
                    <Col md={3} className='d-flex justify-content-center mb-4'>
                        <div className="box"></div>
                        <p className='box__text'>Широкий выбор спортивной одежды, обуви и термобелья</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mb-5'>
                <Row style={{position: 'relative'}}>
                    <Image src='img/main-img.png' className='w-100'/>
                    <div className="main__title-block">
                        <h1 style={{textAlign: 'left', display: 'inline-block', fontSize: 63, color: "#fff", paddingRight:'-100px'}}>Если кросовки, <br/>то только</h1>
                        <Image src='img/logo-light.svg' style={{verticalAlign: "baseline", marginLeft: '-149px'}}/>
                    </div>
                </Row>
            </Container>
            <Container className='mb-5'>
                <h1>Новинки</h1>
                <ItemList />
            </Container>
        </main>    
    )
}

export default Main;
;
