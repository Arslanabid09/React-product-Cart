import React from 'react'
import { useCart } from '../CartContext/Context'
import Cart from '../../src/assets/iconCart.png'

const Header = ({onClick}) => {
    let cart = useCart();
  return (
    <header className='flex justify-between px-20 items-center pt-10'>
        <h1 className='text-3xl font-semibold'>Home.</h1>
        <div className='relative bg-white shadow-md duration-300 rounded-full cursor-pointer  p-2 hover:scale-110' onClick={onClick}>
        <img className='w-6' src={Cart} alt="Cart-icon" />
        <p className='text-sm absolute -top-1 left-4 font-semibold'>{cart.count}</p>
        </div>
    </header>
  )
}

export default Header