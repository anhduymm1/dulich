import safety_and_support from '../../Assets/safety_and_support.png'
import Diverse_Range_of_Destinations from '../../Assets/Diverse_Range_of_Destinations.png'
import customer247 from '../../Assets/247.png'
import image from '../../Assets/gridImage.jpg'
import './Portifolio.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Portifolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='portifolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Should You Choose Us</h3>
            <p data-aos="fade-up">
              We have extensive knowledge and experidence
              in the travel industry.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={safety_and_support} alt="" />
              </div>

              <div className="info"  data-aos="fade-up">
                <h4 > Safety and support</h4>
                <p>
                  Our top priority is the safety and
                  well-being of our clients.
                  We maintain high safety standards and
                  have emergency support
                  available during the trip.
                </p>
              </div>

            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={Diverse_Range_of_Destinations} alt="" />
              </div>

              <div className="info">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Whether it's a dimestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.
                </p>
              </div>

            </div>

            <div className="singlePortifolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={customer247} alt="" />
              </div>

              <div className="info">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is
                  available round the
                  clock to address any queries or
                  concerns before, during, and after the trip
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="rightContent" data-aos="fade-down">
          <img src={image} alt="" style={{ borderRadius: '20px' }} />
        </div>
      </div>
    </div>
  )
}

export default Portifolio