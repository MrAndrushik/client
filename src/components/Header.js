import React from "react";
import { Context } from "../index";
import 'react-bootstrap'
import { Button, Col, Container, Form, FormControl, Image, Row } from "react-bootstrap";
import {observer} from 'mobx-react-lite'
import { LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { Link, useNavigate } from "react-router-dom";

const Header =  observer(() => {
    const { user } = React.useContext(Context)
    const navigate = useNavigate()

    return (
        <header className="header">
            <Container>
                <Row className="mb-3">
                    <Col md={3}>
                        <Link to={MAIN_ROUTE}>
                            <Image src="img/logo.svg" alt="" />
                        </Link>
                    </Col>
                    <Col md={4}>
                    <Form className="d-flex">
                            <FormControl
                            type="search"
                            placeholder="Поиск товаров"
                            className="header__search"
                            aria-label="Search" 
                            style={{background:"url('../img/search.svg') no-repeat right center", paddingRight: "25px"}}/>
                    </Form>
                    </Col>
                    <Col md={5} className="d-flex justify-content-end">
                        <div>
                            <p className="header__number">8 (800)-550-98-68</p>
                            <p className="header__descr">Бесплатный звонок по России</p>
                        </div>
                        {!user.isAuth ?
                            <div>
                            <Button variant="none" className="btn__answer">Задать вопрос</Button>
                            <Button variant="none" className="btn__login" onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                            </div>
                        :
                        <div>
                            <Button variant="none" className="btn__answer">Задать вопрос</Button>                       
                            <Button variant="none" className="btn__login">ЛК</Button>
                        </div>
                        }
                    </Col>
                </Row>
                <Row className="row header__category mb-4">
                    <Col md={10} className="m0">
                        <div className="header__wrapper">
                            <ul className="header__list">
                                <li className="header__item header__item_active"><button className="btn__category">SALE</button></li>
                                <li className="header__item"><Button variant="dark" className="btn__category">Мужчинам</Button></li>
                                <li className="header__item"><Button variant="dark" className="btn__category">Женщинам</Button></li>
                                <li className="header__item"><Button variant="dark" className="btn__category">Детям</Button></li>
                                <li className="header__item"><Button variant="dark" className="btn__category">Одежда</Button></li>
                                <li className="header__item"><Button variant="dark" className="btn__category">Кроссовки</Button></li>   
                                <li className="header__item"><Button variant="dark" className="btn__category">Аксессуары</Button></li>   
                            </ul>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className="d-flex justify-content-end">
                            <Button variant="outline-success" className="d-flex m-auto cart__btn">
                                <img src="img/cart.svg" alt="" />
                                <p className="cart__total">15 880₽</p>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
})

export default Header;
