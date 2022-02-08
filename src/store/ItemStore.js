import {makeAutoObservable} from 'mobx'

export default class ItemStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Кроссовки'},
            {id: 2, name: 'Футболки'},
            {id: 3, name: 'Аксессуары'},
        ]
        this._brands = [
            {id: 1, name: 'Nike'},
            {id: 2, name: 'Adidas'},
        ]
        this._items = [
            {id: 1, name: "Mizuno Wave Rider 24 кроссовки для бега", price: 8630, img: 'img/test.png' },
            {id: 2, name: "Mizuno Wave Rider 24 кроссовки для бега", price: 8630, img: 'img/test.png' },
            {id: 3, name: "Mizuno Wave Rider 24 кроссовки для бега", price: 8630, img: 'img/test.png' },
            {id: 4, name: "Mizuno Wave Rider 24 кроссовки для бега", price: 8630, img: 'img/test.png' },
            {id: 5, name: "Mizuno Wave Rider 24 кроссовки для бега", price: 8630, img: 'img/test.png' },
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setUser(brands) {
        this._brands = brands
    }

    setItems(items) {
        this._items = items
    }

    get types() {
        return this._types
    }

    get brand() {
        return this._brands
    }

    get items() {
        return this._items
    }
}