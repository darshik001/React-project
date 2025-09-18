import './App.css'
import UserInfo from './Component/UserInfo'
import img1 from './assets/img-1.jpeg'
import img2 from './assets/img-2.jpeg'
import img3 from './assets/img-3.avif'
import img4 from './assets/img-4.jpeg'
import img5 from './assets/img-5.jpeg'
function App() {

  return (
    <>
      <h1>User Information</h1>
      <div className='user-grid'>

        <UserInfo image={img1} name="Darshik Shekhada" email="darshik@gmail.com" city='Surat' age={23} occupation="Front-End Developer " />

        <UserInfo image={img2} name="Love Dhameliya" email="luv@gmail.com" city='Bhavnagar' age={22} occupation="Back-End Developer" />


        <UserInfo image={img3} name="Love Dhameliya" email="luv@gmail.com" city='Bhavnagar' age={22} occupation="Full-Stack Developer" />
        <UserInfo image={img4} name="Darshik Shekhada" email="darshik@gmail.com" city='Surat' age={23} occupation="UI & UX Designer" />

        <UserInfo image={img5} name="Love Dhameliya" email="luv@gmail.com" city='Bhavnagar' age={22} occupation="Software Engineer" />
      </div>
    </>
  )
}

export default App
