import './App.css';
import {useState, useEffect} from 'react'
import Header from './component/Header'
import Product from './component/Product'
import products from './products.json'
import Basket from './component/Basket';

function App() {

  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(setMoney);

  const resetBasket = () => {
    setBasket([])
  }
  
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0),
    )
  }, [basket]);

  return (
    <div >
      <Header total={total} money= {money} />
      <div className='container products'>
      {products.map(product => (
        <Product key={product.id} total={total} money= {money} basket={basket} setBasket={setBasket} product={product} />
      ))}
      </div>
      {total > 0 && (
              <Basket resetBasket={resetBasket} products={products} total={total} basket={basket}/>
      )}
    </div>
  );
}

export default App;
