import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <div className="navbar__logo">
                                <span className="navbar__logo-icon">A</span>
                            </div>
                            <span className="footer__brand-text">ARKELIB</span>
                        </div>
                        <p className="footer__desc">{t('footer.desc')}</p>
                        <div className="footer__social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaXTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4>{t('footer.quickLinks')}</h4>
                        <Link to="/">{t('nav.home')}</Link>
                        <Link to="/about">{t('nav.about')}</Link>
                        <Link to="/vision-mission">{t('nav.vision')}</Link>
                        <Link to="/products">{t('nav.products')}</Link>
                    </div>

                    <div className="footer__col">
                        <h4>{t('footer.services')}</h4>
                        <Link to="/products">{t('services.ai.title')}</Link>
                        <Link to="/products">{t('services.ml.title')}</Link>
                        <Link to="/products">{t('services.nlp.title')}</Link>
                        <Link to="/products">{t('services.cv.title')}</Link>
                    </div>

                    <div className="footer__col">
                        <h4>{t('footer.contact')}</h4>
                        <span>{t('contact.info.emailValue')}</span>
                        <span>{t('contact.info.phoneValue')}</span>
                        <span>{t('contact.info.addressValue')}</span>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} ARKELIB. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
}
