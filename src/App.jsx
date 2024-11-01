import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Products from "./pages/Products"

function App() {

  return (
    <>
      {/* <Main/> */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
