import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { HiMenu, HiX } from 'react-icons/hi';

const TR_FLAG = 'https://flagcdn.com/w40/tr.png';
const EN_FLAG = 'https://flagcdn.com/w40/gb.png';

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/vision-mission', label: t('nav.vision') },
        { path: '/products', label: t('nav.products') },
        { path: '/references', label: t('nav.references') },
        { path: '/contact', label: t('nav.contact') },
    ];

    const toggleLanguage = () => setLanguage(language === 'tr' ? 'en' : 'tr');

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <Link to="/" className="navbar__brand">
                    <div className="navbar__logo">
                        <span className="navbar__logo-icon">A</span>
                    </div>
                    <span className="navbar__brand-text">ARKELIB</span>
                </Link>

                <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button className="navbar__lang" onClick={toggleLanguage}>
                        <img
                            src={language === 'tr' ? EN_FLAG : TR_FLAG}
                            alt={language === 'tr' ? 'English' : 'Türkçe'}
                            className="navbar__flag"
                        />
                        <span>{language === 'tr' ? 'EN' : 'TR'}</span>
                    </button>
                </div>

                <button className="navbar__lang navbar__lang--desktop" onClick={toggleLanguage}>
                    <img
                        src={language === 'tr' ? EN_FLAG : TR_FLAG}
                        alt={language === 'tr' ? 'English' : 'Türkçe'}
                        className="navbar__flag"
                    />
                    <span>{language === 'tr' ? 'EN' : 'TR'}</span>
                </button>

                <button
                    className="navbar__toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>
        </nav>
    );
}
