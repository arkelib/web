import { useLanguage } from '../i18n/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { FaIndustry, FaDiagramProject, FaFaceSmile } from 'react-icons/fa6';

// Import logos
import mebLogo from '../assets/customers/logos/meb.png';
import tambackupLogo from '../assets/customers/logos/tambackup.png';
import universalLogo from '../assets/customers/logos/universal.png';

export default function References() {
    const { t } = useLanguage();

    const logos = [
        { src: mebLogo, name: 'Milli Eğitim Bakanlığı' },
        { src: tambackupLogo, name: 'TamBackup' },
        { src: universalLogo, name: 'Universal' },
    ];

    const refStats = [
        { icon: <FaIndustry size={28} />, value: '8+', label: t('references.industries') },
        { icon: <FaDiagramProject size={28} />, value: '50+', label: t('references.projectsCompleted') },
        { icon: <FaFaceSmile size={28} />, value: '%98', label: t('references.clientSatisfaction') },
    ];

    return (
        <div className="page-wrapper">
            <section className="page-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1 className="page-hero__title">{t('references.title')}</h1>
                        <p className="page-hero__subtitle">{t('references.subtitle')}</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="ref-stats">
                            {refStats.map((s, i) => (
                                <div key={i} className="ref-stat-card">
                                    <div className="ref-stat-card__icon">{s.icon}</div>
                                    <span className="ref-stat-card__value">{s.value}</span>
                                    <span className="ref-stat-card__label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Logo Slider (Marquee) */}
            <section className="section" style={{ overflow: 'hidden', paddingBottom: '120px' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>{t('references.partners.title')}</h2>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={200}>
                    <div className="logo-slider">
                        <div className="logo-slider-track">
                            {/* Render twice for infinite loop effect */}
                            {[...logos, ...logos, ...logos].map((logo, i) => (
                                <div key={i} className="logo-card">
                                    <img src={logo.src} alt={logo.name} className="logo-card__img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
}
