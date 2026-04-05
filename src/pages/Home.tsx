import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { FaBrain, FaChartLine, FaComments, FaEye, FaArrowRight } from 'react-icons/fa6';

export default function Home() {
    const { t } = useLanguage();

    const services = [
        { icon: <FaBrain size={32} />, titleKey: 'services.ai.title', descKey: 'services.ai.desc' },
        { icon: <FaChartLine size={32} />, titleKey: 'services.ml.title', descKey: 'services.ml.desc' },
        { icon: <FaComments size={32} />, titleKey: 'services.nlp.title', descKey: 'services.nlp.desc' },
        { icon: <FaEye size={32} />, titleKey: 'services.cv.title', descKey: 'services.cv.desc' },
    ];

    const stats = [
        { value: '50+', label: t('stats.projects') },
        { value: '30+', label: t('stats.clients') },
        { value: '%98', label: t('stats.satisfaction') },
        { value: '7/24', label: t('stats.support') },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__bg-orbs">
                    <div className="hero__orb hero__orb--1" />
                    <div className="hero__orb hero__orb--2" />
                    <div className="hero__orb hero__orb--3" />
                </div>

                {/* Animated particles */}
                <div className="hero__particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="hero__particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                        }} />
                    ))}
                </div>

                {/* Animated rings */}
                <div className="hero__rings">
                    <div className="hero__ring hero__ring--1" />
                    <div className="hero__ring hero__ring--2" />
                    <div className="hero__ring hero__ring--3" />
                </div>

                <div className="container hero__content">
                    <AnimatedSection>
                        <div className="hero__badge-wrapper">
                            <span className="badge">{t('hero.badge')}</span>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={100}>
                        <h1 className="hero__title">
                            {t('hero.title')}<br />
                            <span className="gradient-text">{t('hero.titleHighlight')}</span>
                        </h1>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <p className="hero__subtitle">{t('hero.subtitle')}</p>
                    </AnimatedSection>
                    <AnimatedSection delay={300}>
                        <div className="hero__actions">
                            <Link to="/products" className="btn btn-primary btn-glow">
                                {t('hero.cta')} <FaArrowRight />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                {t('hero.ctaSecondary')}
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* Stats integrated below Hero buttons */}
                    <AnimatedSection delay={400}>
                        <div className="hero__stats">
                            {stats.map((stat, i) => (
                                <div key={i} className="hero__stat-item">
                                    <span className="hero__stat-value">{stat.value}</span>
                                    <span className="hero__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>{t('services.title')}</h2>
                            <p>{t('services.subtitle')}</p>
                        </div>
                    </AnimatedSection>

                    <div className="grid-4 grid-4--equal">
                        {services.map((s, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="card service-card">
                                    <div className="service-card__icon">{s.icon}</div>
                                    <h3 className="service-card__title">{t(s.titleKey)}</h3>
                                    <p className="service-card__desc">{t(s.descKey)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-content">
                            <h2>{t('cta.title')}</h2>
                            <p>{t('cta.subtitle')}</p>
                            <Link to="/contact" className="btn btn-primary btn-glow">
                                {t('cta.button')} <FaArrowRight />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
