import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={"This is Home Page"}/>
     </Routes>
    </>
  )
}

export default App
