import Footer from './components/Footer'
import { Header } from './components/Header'
import ProductsList from './components/ProductsList'
import { CartProvider } from './context/CartContext'
import { SideBarProvider } from './context/SideBarContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {


  return (
    <CartProvider>
      <SideBarProvider >
        <ThemeProvider>
          <Header />
          <ProductsList />
          <Footer />
        </ThemeProvider>
      </SideBarProvider>
    </CartProvider >
  )
}

export default App
