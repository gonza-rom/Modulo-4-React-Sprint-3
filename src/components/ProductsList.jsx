import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import SideBar from './SideBar'
import { animaciones } from '../utils/animations'
import { useSideBar } from '../context/SideBarContext'
import productsFromApi from '../../apis/products'

const ProductsList = () => {

  const [products, setProducts] = useState([])

  const { isSidebarOpen, SidebarClose } = useSideBar()

  // carga los productos desde la API (archivo products.js)
  useEffect(() => {
    setProducts(productsFromApi)
  }, [])


  return (

    // defiene el comportameiento del sidebar con el carrito
    <div className="flex flex-wrap justify-center gap-3 p-3 dark:bg-gray-900">
      {
        <AnimatePresence initial={false}>
          {isSidebarOpen &&
            <motion.div
              variants={animaciones()}
              initial='initial_menu'
              animate='animate_menu'
              exit='exit_menu'
              transition={{ duration: 1 }}
              className='fixed top-0 right-0  bg-violet-200 dark:bg-gray-800 w-90 sm:w-110 h-full z-1   overflow-y-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-600'
            >
              <SideBar onClose={SidebarClose} />

            </motion.div>}
        </AnimatePresence>

      }

      { // carga cada producto en un componente ProductCard
        products.map((product) => (
          <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} images={product.images} />
        ))
      }
    </div>
  )
}

export default ProductsList