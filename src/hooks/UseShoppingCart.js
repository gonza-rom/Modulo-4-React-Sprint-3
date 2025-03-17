import { useState, useEffect } from 'react';


const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0)
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  // agrega una nuevo item al carrito
  const addToShoppingCart = (nuevoItem) => {

    const indiceExistente = shoppingCart.findIndex(item => item.id === nuevoItem.id);

    // Si el item existe (índice >= 0), actualizar la cantidad
    if (indiceExistente >= 0) {
      // Crear una copia del array para no mutar el original
      const nuevoArray = [...shoppingCart];
      // Actualizar la cantidad sumando la nueva
      nuevoArray[indiceExistente] = {
        ...nuevoArray[indiceExistente],
        quantity: nuevoArray[indiceExistente].quantity + nuevoItem.quantity
      };

      // Actualiza el carrito con el nuevo array
      setShoppingCart(nuevoArray);
      localStorage.setItem("shoppingCart", JSON.stringify(nuevoArray));

    }
    else {
      // Si no existe, agregar el nuevo item al final del array
      setShoppingCart([...shoppingCart, nuevoItem]);
      localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart, nuevoItem]));
    }
  }

  //
  // establece la cantidad para el item indicado
  const setQuantity = (id, newQuantity) => {

    const indiceExistente = shoppingCart.findIndex(item => item.id === id);
    if (indiceExistente >= 0) {
      // Crear una copia del array para no mutar el original
      const nuevoArray = [...shoppingCart];
      // Actualizar la cantidad sumando la nueva
      nuevoArray[indiceExistente] = {
        ...nuevoArray[indiceExistente],
        quantity: newQuantity
      }
      // Actualiza el carrito con el nuevo array
      setShoppingCart(nuevoArray);
      localStorage.setItem("shoppingCart", JSON.stringify(nuevoArray));

    }
  }

  //  elimina un item del carrito
  const removeFromShoppingCart = (id) => {
    const updatedCart = shoppingCart.filter(item => item.id !== id);
    setShoppingCart(updatedCart);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCart));
  }

  //actualiza la cantidad de items que hay en el carrito
  const updateCartItemCount = () => {
    const count = shoppingCart.reduce((total, item) => total + Number(item.quantity), 0);
    setCartItemCount(count);
  }


  //  elimina un item del carrito
  const getQuantityById = (id) => {
    const item = shoppingCart.find(item => item.id === id);
    return item ? item.quantity : 0;
  }

  //actualiza el precio total del carrito
  const updateTotalCartPrice = () => {
    const totalPrice = shoppingCart.reduce((total, item) => total + (Number(item.quantity) * item.price), 0);
    setTotalCartPrice(totalPrice);
  }

  // carga el carrito desde localStorage
  useEffect(() => {
    const savedShoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) || []
    setShoppingCart(savedShoppingCart)
    updateCartItemCount()
  }, [])

  //cada vez que se modifica el carrito se calcual nuemvamente el precio total y la cantidad de items
  useEffect(() => {
    updateCartItemCount()
    updateTotalCartPrice()
  }, [shoppingCart])

  return {
    shoppingCart,
    cartItemCount,
    totalCartPrice,
    addToShoppingCart,
    removeFromShoppingCart,
    setQuantity,
    getQuantityById
  }
}

export default useShoppingCart;