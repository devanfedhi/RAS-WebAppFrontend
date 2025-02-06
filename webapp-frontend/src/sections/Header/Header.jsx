import React, { useRef, useState } from 'react'
import { useTheme } from '../../common/ThemeContext';

import styles from './Header.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menuLight from '../../assets/menu-light.svg';
import menuDark from '../../assets/menu-dark.svg';
import closeLight from '../../assets/close-light.svg';
import closeDark from '../../assets/close-dark.svg';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
    const location = useLocation();
    
    const {theme, _} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const menuIcon = theme === 'dark' ? menuDark : menuLight;
    const closeIcon = theme === 'dark' ? closeDark : closeLight;

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "-30px";
        setTimeout(() => {
            setIsMenuOpen(true);
        }, 100); 
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-400px";
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 150); 
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY ;
        const yOffset = -150; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    };
  return (
    <section id="header" className={styles.container}>
        <div className={styles.title}>project <br></br>raspberry </div>
        {!isMenuOpen && (
            <img src={menuIcon} onClick={openMenu} className={styles.menuIcon} alt="Menu Icon" />
        )}
        <ul ref={menuRef} className={styles.nav}>
            <div className={styles.closeDiv}><img src={closeIcon} onClick={closeMenu} className={styles.closeIcon}></img></div>
            {location.pathname === "/" ? (
                <div className={styles.navItems}>
                    <li className={styles.item}><AnchorLink className={styles.anchor} href='#profile'>Home</AnchorLink></li>
                    <li className={styles.item}><AnchorLink className={styles.anchor} offset={150} href='#qualifications'>Qualifications</AnchorLink></li>
                    <li className={styles.item}><AnchorLink className={styles.anchor} offset={150} href='#skills'>Skills</AnchorLink></li>
                    <li className={styles.item}><AnchorLink className={styles.anchor} offset={150} href='#projects'>Projects</AnchorLink></li>
                </div>

            ) : (
                <div className={styles.navItems}>
                    <li className={styles.item}><HashLink className={styles.anchor} to="/#profile" >Home</HashLink></li>
                    <li className={styles.item}><HashLink className={styles.anchor} to="/#qualifications" scroll={scrollWithOffset}>Qualifications</HashLink></li>
                    <li className={styles.item}><HashLink className={styles.anchor} to="/#skills" scroll={scrollWithOffset}>Skills</HashLink></li>
                    <li className={styles.item}><HashLink className={styles.anchor} to="/#projects" scroll={scrollWithOffset}>Projects</HashLink></li>
                </div>
            )}

         
        </ul>
    </section>
  )
}

export default Header