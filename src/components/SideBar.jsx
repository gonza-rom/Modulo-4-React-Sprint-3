import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { precioLocal } from '../utils/precioLocal'

const SideBar = ({ onClose }) => {
    const { setQuantity, totalCartPrice, removeFromShoppingCart } = useContext(CartContext)

    const handleChange = (id, value) => {
        setQuantity(id, Number(value))
    }

    const remove = (id) => {
        removeFromShoppingCart(id)
    }

    const { shoppingCart } = useContext(CartContext)
    return (
        <div className=' flex flex-col  '>
            <div className='flex justify-end'>
                <i className="bi bi-x-circle dark:text-violet-200 text-3xl cursor-pointer p-3" onClick={onClose}></i>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-xl font-bold text-violet-900 dark:text-violet-200 text-center  pb-5 '>Mi carrito </h1>
                <ul>
                    {
                        shoppingCart.map((item) => (
                            <div key={item.id} className='flex dark:text-violet-200 '>
                                <li key={item.id} className='p-5  w-full'>
                                    <div className='font-bold text-sm'>{item.title} </div>
                                    <div className='flex flex-row justify-between'>
                                        <div className='text-sm'>Precio {precioLocal(item.price)}</div>
                                        <div className='text-sm'>Cantidad <input type="number" value={item.quantity} min={0} className='w-12 text-center' onChange={(e) => { handleChange(item.id, e.target.value) }}></input></div>
                                        <div className='text-sm'>Precio total {precioLocal(item.price * item.quantity)}</div>

                                        <button className='bg-violet-500 hover:bg-violet-600 text-white py-1 px-2 rounded-full cursor-pointer' onClick={() => { remove(item.id) }}><i className="bi bi-trash3 text-md " ></i></button>
                                    </div>
                                    <hr className='w-full border-thin border-violet-500' />
                                </li>
                            </div>
                        ))
                    }
                </ul>

                <p className='text-l font-bold pt-5 dark:text-violet-300'>Precio total del carrito: {precioLocal(totalCartPrice)} </p>

            </div>
        </div>
    )
}

export default SideBar

