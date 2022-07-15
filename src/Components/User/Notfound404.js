import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../404.gif'
const Notfound404 = () => {
  return (
    <div className='not-found bg-white'>
       <Link to='/'>
       
       <img src={gif} alt="" />
       </Link>
    </div>
  )
}

export default Notfound404