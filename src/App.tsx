import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Mina from "./Pages/Mina"
import Parkhang from "./Pages/Parkhang"
import Pecha from "./Pages/Pecha"
import Tsigsar from "./Pages/Tsigsar"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Home/>
          </>
        } />
        <Route path='/Mina' element={
          <>
            <Mina />
          </>
        } />
        <Route path='/Parkhang' element={
          <>
            <Parkhang />
          </>
        } />
        <Route path='/Pecha' element={
          <>
            <Pecha />
          </>
        } />
        <Route path='/Tsigsar' element={
          <>
            <Tsigsar />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
