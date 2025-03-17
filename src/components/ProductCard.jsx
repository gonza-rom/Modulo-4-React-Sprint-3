import React, { useContext } from 'react'
import { precioLocal } from '../utils/precioLocal'
import { CartContext } from '../context/CartContext'

const ProductCard = ({ id, title, price, images }) => {
  const { addToShoppingCart, getQuantityById } = useContext(CartContext)

  const handleClick = (id, title, price, quantity) => {
    //agrega un item al carrito
    addToShoppingCart({ id, title, price, quantity })
  }

  return (
    <>
      <div className='flex flex-col justify-between border-1 border-violet-600 rounded-lg p-5  bg-gray-200 dark:bg-gray-800 m-3  basis-64 shadow-md'>
        <img src={`${images[0]}`} alt={`${title}-poster`} className='w-70 rounded-sm' />
        <p className='text-md dark:text-gray-300'>{title}</p>
        <p className='text-gray-900 text-xl pt-2 dark:text-gray-300' >{precioLocal(price)} </p>
       
        <div className='flex '>
          <button className='bg-violet-500 hover:bg-violet-600 text-white text-3xl py-2 px-4 mt-4 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center' onClick={() => handleClick(id, title, price, 1)}><i className="bi bi-cart-plus dark:text-violet-900"></i>  </button>
          {getQuantityById(id) > 0 && (
            <span className='relative top-2 right-3  bg-red-600 text-white dark:text-gray-300 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center'>
              {getQuantityById(id)}
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCard