import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

function Auth() {
    const isLogin = useLocation().pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    return (
        <Container
            className='d-flex align-items-center justify-content-center flex-column'
            style={{ height: window.innerHeight - 159 }}
        >   
            {isLogin 
            ? <h1 className='auth__title' style={{textAlign: 'left', width: 620}}>Авторизация</h1>
            : <h1 className='auth__title' style={{textAlign: 'left', width: 620}}>Регистрация</h1>
            }
            <Card style={{ width: 620, background: '#FFFFFF', boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.1)', borderRadius: 10, padding: 40}} className=''>
                <Form>
                    <h2 className='auth__subtitle'>Добро пожаловать на самый лучший спортивный магазин</h2>
                    <Form.Group style={{width: 320}} className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group style={{width: 320}} className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {!isLogin &&
                    <div>
                    <Form.Group style={{width: 320}} className="mb-3" controlId="formGroupPasswordRepeat">
                        <Form.Label>Повторите пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check className='mt-4' style={{fontSize: 14}} type="checkbox" label="Согласие на обработку персональных данных" />
                        <p style={{fontSize: 12}}>Настоящим подтверждаю, что я ознакомлен и согласен с условиями</p>
                    </Form.Group>
                    </div>
                    }
                    <Link to="/recover" style={{textDecoration: 'none', color: '#000', fontSize: 14}}>Забыли пароль?</Link>
                    {isLogin
                    ?<div className='mt-5'>
                        <Button style={{marginRight: 10}} variant='dark'>Авторизироваться</Button>
                        <Button variant='dark' onClick={() => navigate(REGISTRATION_ROUTE)}>Регистрация</Button>
                    </div>
                    :<div className='mt-5'>
                        <Button style={{marginRight: 10}} variant='dark'>Зарегестрироваться</Button>
                        <Button variant='dark' onClick={() => navigate(LOGIN_ROUTE)}>Авторизироваться</Button>
                    </div>
                    }
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;
