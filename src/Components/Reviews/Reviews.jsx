import './Reviews.scss'
import { AiFillStar } from "react-icons/ai";
import AnhBa from "../../Assets/anhba.jpg"
import AnhBaCung from "../../Assets/bacung.jpg"
import BaCao from "../../Assets/bacao.jpg"
import BaCao2 from "../../Assets/bacaonua.jpeg"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Reviews = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className="redText"  data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
          <p data-aos="fade-up">
            By choososing us as their tour agency,
            customers can expect an
            enriching and enjoyable travel experience,
            filled with unforgettable
            memories that will last a lifetime.
          </p>

          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
          </span>

          <div className="clientsImages flex">
            <img src={AnhBa} alt="" data-aos="fade-up"/>
            <img src={BaCao} alt="" data-aos="fade-up"/>
            <img src={AnhBaCung} alt="" data-aos="fade-up"/>
            <img src={AnhBa} alt="" data-aos="fade-up"/>
          </div>
        </div>

        <div className="imgDiv" >
          <img src={BaCao2} alt="Div Image" data-aos="fade-down" />
        </div>
      </div>
    </div>
  )
}

export default Reviews