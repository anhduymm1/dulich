import './Subscribe.scss'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import goidienthoai from '../../Assets/goidienthoai.jpg'
const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='subscribe section container'>
      <div className="secContainer grid">
        <img src={goidienthoai} alt=""  data-aos="fade-down"/>


        <div className="textDiv">
          <h4 data-aos="fade-up">Best Way To Start Your Journey!</h4>
          <p data-aos="fade-up">
            We offer personalized itineraries tailored to
            individ al preferences
            and interests.
          </p>
          <button className='btn'  data-aos="fade-up">
            Start Here
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe