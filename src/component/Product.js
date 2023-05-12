import React from 'react'
import { moneyFormat } from '../helpers'

function Product({ product, total, money, basket, setBasket }) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else { setBasket([...basketWithoutCurrent, currentBasket]) }

    }

    return (
        <div className='product'>
            <img src={product.image} />
            <h6>{product.title}</h6>
            <div className='price'>$ {moneyFormat(product.price)}</div>
            <div className='actions'>
                <button className='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sat</button>
                <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                <button className='buy-btn' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
            </div>
            <style jsx>{`
        .product {
            padding: 15px;
            background: #fff;
            border: 2px solid #ddd;
            margin-bottom: 20px;
            width: 24%;
            border-radius: 8px;
        }
        
        .product img {
            width: 100%;
            height: 210px;
            margin-bottom: 10px;
        }

        .product h6 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .product .price {
            font-size: 20px;
            color: #4CCB66;
            font-weight: 500;
        }

        .product .actions {
            display:flex;
            align-items:center;
        }

        .actions button {
            padding: 15px 20px;
            margin: 10px 10px 0 10px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;

        }

        .actions button[disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .actions .buy-btn {
            background: #AFFBD7;
        }

        .actions .sell-btn {
            background: #BCCAC2;
            color: #000;
        }

        .actions .amount {
            font-weight: 500;

        }

        
        `} </style>
        </div>
    )
}

export default Product