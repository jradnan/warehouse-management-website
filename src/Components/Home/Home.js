import React, { useEffect, useState } from 'react'
import Header from './Header'
import Card from '../Inventory/Card'
import About from '../About/About';
import Contact from '../Contact/Contact.jsx';
import Home2 from '../Home2.js/Home2';
const Home = () => {

  const [loading, setloading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://quiet-hamlet-32880.herokuapp.com/product')
      .then(res => res.json())
      .then(json => {setProduct(json)
        setloading(false)
      })
      
  }, []);
  // if (loading) {
  //   return <Loading />
  // }

  return (
    <main className='home'>
      <Header></Header>
      <About />
    
      <div className="container">
        <h1 className='text-center py-5'>Products</h1>
        <div className="grid-3-col">
          {
            product.slice(0,6).map(prod => <Card
            key={prod._id}
              desc={prod.description}
              image={prod.image}
              name={prod.name}
              suplier={prod.suplier}
              quantity={prod.quantity}
              price={prod.price}
              to={prod._id}
            />


            )
          }
        </div>
      </div>
      <Contact />
    </main>
  )
}

export default Home