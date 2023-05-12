import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, resetBasket, total, products }) {
    return (
        <>
            <div className='basket-container container'>
                <ul>
                    <h3>Alışveriş Detayları</h3>
                    {basket.map(item => (
                        <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                    ))}
                </ul>
                <div className='total'>
                    Toplam: ${total}
                </div>
                <button className='reset-basket-btn' onClick={resetBasket}>Sepeti Boşalt</button>

            </div>
            <style jsx>{`
            .basket-container {
                background: #DAFFED;
                border-radius: 8px;
                padding: 20px;
            }

            .basket-container .reset-basket-btn {
            padding: 15px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            background: #BCCAC2;
            margin-top: 10px;
            }

            .basket-container h3 {
            font-size: 20px; 
            margin-bottom: 15px;            
            }

            .basket-container .total {
                border-top: 1px solid #ddd;
                padding-top: 10px;
                margin-top: 10px;
                font-size: 18px;
                font-weight: bold;
                text-align: right;
                color: #4CCB66;
            }

            `}</style>

        </>
    )
}

export default Basket