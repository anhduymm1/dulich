import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Destinations from './Components/Destinations/Destinations'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Navbar from './Components/Navbar/Navbar'
import Portifolio from './Components/Portifolio/Portifolio'
import Question from './Components/Question/Question'
import Reviews from './Components/Reviews/Reviews'
import Subscribe from './Components/Subscribe/Subscribe'
import DetailDestination from './Page/DetailDestination'

function App() {

  return (
    <Routes>
      <Route
        path='/dulich'
        element={
          <div>
            <Navbar />
            <Home />
            <Middle />
            <Destinations />
            <Portifolio />
            <Reviews />
            <Question />
            <Subscribe />
            <Footer />
          </div>
        }
      >
      </Route>
      {/* <Route path="/:destinationId" element={<DetailDestination />}></Route> */}
    </Routes>

  )
}

export default App
