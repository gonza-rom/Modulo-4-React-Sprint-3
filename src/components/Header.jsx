import React, { useContext } from 'react'
import { useSideBar } from '../context/SideBarContext'
import { CartContext } from '../context/CartContext'
import ThemeToggle from './ThemeToggle'


export const Header = () => {
  const { SidebarOpen } = useSideBar()
  const { cartItemCount } = useContext(CartContext)
  return (

    <div className='relative bg-cyan-500 p-4 pl-30 min-h-24 text-white dark:text-cyan-100 text-4xl font-bold'>

      <p className='prosto-one-regular text-white'>CTA Shopping</p>
{/* boton del carrito */}
      <button className='absolute bottom-2 right-4 text-white dark:text-cyan-100 text-3xl py-2 px-4 rounded-full cursor-pointer flex items-center' onClick={SidebarOpen}>
        <i className="bi bi-cart"></i>
        {cartItemCount > 0 && (
          <span className='absolute top-0 right-0  bg-red-500 text-white dark:text-gray-300 text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center'>
            {cartItemCount}
          </span>
        )}
      </button>
{/* boton dark/light theme */}
      <ThemeToggle />
    </div>
  )
}
