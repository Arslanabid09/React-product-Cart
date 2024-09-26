import React from 'react'
import Cart from '../assets/iconCart.png'
import img1 from '../assets/1.png'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext/Context'

const Card = ({productss}) => {
  let cart = useCart();
  return (
    <>
    <section className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-lg shadow p-4">
      <img src={productss.image} alt={img1} className="rounded-t-lg w-full h-52 object-contain" loading='lazy' />
    
      <div className="p-5">
        <h5 className="text-xl  tracking-tight text-gray-500 hover:text-slate-800">{productss.name}</h5>
        <p className="font-normal text-gray-500 my-2">${productss.price}</p>
        <button  onClick={()=>cart.addToCart(productss.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-slate-300 rounded-lg hover:bg-slate-400">
          <img className='w-8' src={Cart} alt="cart-icon" loading='lazy' />
        </button>
      </div>
    </section>
    </>
   
  )
}

export default Card