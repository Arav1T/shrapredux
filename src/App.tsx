import { useSelector } from "react-redux"
import Navbar from "./header/Navbar"
import Cart from "./main/Cart"
import Product from "./main/Product"



function App() {
  const onShow = useSelector(state=>state.uiSlice.onShow)
  return (
    <>
      <Navbar/>
      {onShow && <Cart/>}
      <Product/>
    </>
  )
}

export default App
