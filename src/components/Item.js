import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ITEM_ROUTE } from '../utils/consts';

function Item({ item }) {
    const navigate = useNavigate()
    return (
        <Col style={{cursor: 'pointer'}} className='mb-4' onClick={() => navigate(ITEM_ROUTE + "/" + item.id)}>
            <div className="item__box">
                <img src={item.img} alt="sneackers" className='item__img'/>
                <div className="discount__block">
                    <p className="item__discount">-5%</p>
                </div>
                <h3 className="item__title">{item.name}</h3>
                <div className='d-flex justify-content-between align-center'>
                    <div>
                        <p className="item__price">{item.price + " ₽"}</p>
                        <p className="item__old-price">{item.price + " ₽"}</p>
                    </div>
                    <button className='item__btn'>
                        <Image src='img/cart.svg'/>
                    </button>
                </div>
            </div>
        </Col>
    )
}

export default Item;
