import './Footer.scss'
import { BiLogoAdobe } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { SiZalo } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-up">
            <BiLogoAdobe className='icon' />
            <span>G-Trips</span>
          </div>
          <div className="socials flex" data-aos="fade-up">
            <ImFacebook className='icon' />
            <SiZalo className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>

        <div className="footerLinks" >
          <span className="linkTitle">
            Infomation
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks" >
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks" >
          <span className="linkTitle">
            Contact Details
          </span>
          <span className="phone">
            +651 125 658
          </span>
          <span className="email">
            bacung@gmail.com
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer