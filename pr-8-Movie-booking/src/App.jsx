
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header/Header'
import AddForm from './Component/MoviesFrom/AddForm'
import Home from './Component/Home/Home'
import Bollywood from './Component/Bollywood/Bollywood'
import Hollywood from './Component/Hollywood/Hollywood'
import EditForm from './Component/MoviesFrom/EditForm'

function App() {

  return (
    <>
    <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/addmovie' element={ <AddForm/>}/>
        <Route path='/edtmovie/:id' element={ <EditForm/>}/>
       
       </Routes>
      
    </>
  )
}

export default App
