import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }
    const handleHireMeClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
        <nav className='nav-bar'>
            <div className='logo'>
                <a href='#'>GUJI.dev</a>
            </div>
            <ul className='nav-links'>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='hire-me-link'>
                <button onClick={handleHireMeClick} className='hire-me'>
                    Hire Me
                </button>
            </div>
        </nav>
            {menuOpen && 
                <ul className='responsive-navbar'>
                    <li><a onClick={handleMenuClick} href='#skills'>Skills</a></li>
                    <li><a onClick={handleMenuClick} href='#projects'>Projects</a></li>
                    <li><a onClick={handleMenuClick} href='#contact'>Contact</a></li>
                    <CloseIcon onClick={handleMenuClick} className='close-icon' style={{color: 'white'}} />
                </ul>}
                {!menuOpen ? 
                    <div className='menu-icon'>
                        <MenuIcon onClick={handleMenuClick} style={{color: 'white', fontSize:'2.5rem'}} />      
                    </div> 
                : null}
        </>
    )
}

export default Navbar;