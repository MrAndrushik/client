import { observer } from 'mobx-react-lite';
import React from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import Item from './Item';

const ItemList = observer(() => {
    const {item} = React.useContext(Context)
    console.log(item);
    return (
        <Row className='d-grid' style={{gridTemplateColumns:"repeat(5, 1fr)"}}>
            {item.items.map(item =>
                <Item key={item.id} item={item}/>
            )}
        </Row>
    )
})

export default ItemList;
