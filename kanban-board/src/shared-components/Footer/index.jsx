import './style.css';
import {BsKanban} from 'react-icons/bs'


function Footer () {

    return (
        <footer className='footer__container'>
            <BsKanban className='footer-logo'></BsKanban>
            <h4 className='footer-info'>&copy; Jetza, Alberto y Marco. All Rights Reserved.</h4>
        </footer>
    )
}


export default Footer;