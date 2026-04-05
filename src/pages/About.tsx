import { useLanguage } from '../i18n/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { FaLightbulb, FaGem, FaHandshake, FaUserCheck } from 'react-icons/fa6';

export default function About() {
    const { t } = useLanguage();

    const values = [
        { icon: <FaLightbulb size={28} />, titleKey: 'about.value1.title', descKey: 'about.value1.desc' },
        { icon: <FaGem size={28} />, titleKey: 'about.value2.title', descKey: 'about.value2.desc' },
        { icon: <FaHandshake size={28} />, titleKey: 'about.value3.title', descKey: 'about.value3.desc' },
        { icon: <FaUserCheck size={28} />, titleKey: 'about.value4.title', descKey: 'about.value4.desc' },
    ];

    return (
        <div className="page-wrapper">
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1 className="page-hero__title">{t('about.title')}</h1>
                        <p className="page-hero__subtitle">{t('about.subtitle')}</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="story-section">
                            <div className="story-section__content">
                                <h2 className="gradient-text">{t('about.story.title')}</h2>
                                <p>{t('about.story.p1')}</p>
                                <p>{t('about.story.p2')}</p>
                                <p>{t('about.story.p3')}</p>
                            </div>
                            <div className="story-section__visual">
                                <div className="story-visual">
                                    <div className="story-visual__ring story-visual__ring--outer" />
                                    <div className="story-visual__ring story-visual__ring--inner" />
                                    <div className="story-visual__center">
                                        <span>A</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Values Section */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>{t('about.values.title')}</h2>
                        </div>
                    </AnimatedSection>

                    <div className="grid-4 grid-4--equal">
                        {values.map((v, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="card value-card">
                                    <div className="value-card__icon">{v.icon}</div>
                                    <h3>{t(v.titleKey)}</h3>
                                    <p>{t(v.descKey)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
