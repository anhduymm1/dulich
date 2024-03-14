import './Middle.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Middle = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='middle section'>
      <div className="secContainer container">
        <div className="grid" data-aos= 'fade-up'>
          <span className='flex' >
            <h1>10</h1>
            <p>World Of Experiences</p>
          </span>
          <span className='flex'>
            <h1>2K+</h1>
            <p>Fine Destinations</p>
          </span>
          <span className='flex'>
            <h1>10K+</h1>
            <p>Customer Reviews</p>
          </span>
          <span className='flex'>
            <h1>4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Middle