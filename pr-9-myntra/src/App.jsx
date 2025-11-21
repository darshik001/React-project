import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import AddProduct from './Component/AddProduct/AddProduct'
import Home from './Component/Home/Home'
import Man from './Component/Man/Man'
import Women from './Component/Women/Women'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/man' element={<Man/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/kids' element={"This is kids Page"}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
     </Routes>
    </>
  )
}

export default App
