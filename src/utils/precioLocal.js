export const precioLocal=  (price) => {
    const cotizacionDolar = 1086.50
    const precioPesos = price * cotizacionDolar
    return    precioPesos.toLocaleString("es-AR", {style:"currency", currency:"ARS"})
}