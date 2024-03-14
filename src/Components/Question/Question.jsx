import './Question.scss'
import According from './According'
import { useState, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Question = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [active, setActive] = useState('What are the most surreal places to visit?')

  return (
    <div className='question secion container'>
      <div className="secHeading">
        <h3 data-aos="fade-up">Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid" >
        <div className="according grid">
          <According
           
            title="What are the most surreal places to visit?"
            desc="Some of the strangest places on earth are also the most sublime:
             from the UFO-like dragon's blood trees in Yemen 
             to a rainbow-colored hot spring in Yellowstone "
            active={active}
            setActive={setActive}
          />
          <According
            title="Do you have to be rich to travel the world?"
            desc="The beauty of travel is that it’s accessible to everyone, 
            in some form. You don't have to go far to experience a new culture.
             Plus there are several ways to make most flights affordable, 
             whether by being flexible, searching on new websites like Skypicker
              and Fareness, or just by planning ahead."
            active={active}
            setActive={setActive}
          />
          <According
            title="What’s it really like to be a travel writer?"
            desc="For every beautiful beach hideaway, there’s been a missed
             flight or delay; for every delicious meal, 
             a nasty case of 'Delhi belly, 
             says Traveler contributing editor Krisanne Fordham in her 
             story on this very topic."
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4  data-aos="fade-up">Do you have any specific question?</h4>
            <p data-aos="fade-up">
              Please fill the form below and our
              dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address'  data-aos="fade-up"/>
            <textarea placeholder='Enter your question here'  data-aos="fade-up"></textarea>
            <button className='btn'  data-aos="fade-up">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question