import {FaFacebook, FaInstagram, FaLinkedin, FaCopyright} from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    console.log(currentYear)

    return(
        <div className="footer">
            <div className="icons">
                <Link target="_blank" to="https://www.youtube.com/watch?v=c-8lHk3-VwI">
                    <FaFacebook className="fa face" />
                </Link>  
                <Link target="_blank" to="https://www.youtube.com/watch?v=c-8lHk3-VwI">
                    <FaInstagram className="fa insta" />
                </Link>  
                <Link target="_blank" to="https://www.youtube.com/watch?v=c-8lHk3-VwI">
                    <FaLinkedin className="fa link" />
                </Link>  
                   
            </div>
            <p>Todos direitos reservados <span> <FaCopyright/> {currentYear}</span> </p>
        </div>
    )
}

export default Footer;