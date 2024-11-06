import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Products from "./pages/Products"
import Details from "./pages/Details"
import Contactpage from "./pages/Contactpage"
import Aboutpage from "./pages/Aboutpage"

function App() {

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/products/:slug' element={<Details />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
