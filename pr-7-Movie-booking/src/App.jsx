
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header/Header'
import AddForm from './Component/MoviesFrom/AddForm'

function App() {

  return (
    <>
    <Header/>
       <Routes>
        <Route path='/' element={<h2>this is Home Page</h2>}/>
        <Route path='/addmovie' element={ <AddForm/>}/>
       
       </Routes>
      
    </>
  )
}

export default App
