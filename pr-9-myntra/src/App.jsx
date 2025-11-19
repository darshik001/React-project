import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import AddProduct from './Component/AddProduct/AddProduct'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={"This is Home Page"}/>
      <Route path='/man' element={"This is man Page"}/>
      <Route path='/women' element={"This is women Page"}/>
      <Route path='/kids' element={"This is kids Page"}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
     </Routes>
    </>
  )
}

export default App
