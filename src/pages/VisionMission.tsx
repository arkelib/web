import { useLanguage } from '../i18n/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { FaGlobe, FaFlask, FaHeart, FaUsers } from 'react-icons/fa6';

export default function VisionMission() {
    const { t } = useLanguage();

    const goals = [
        { icon: <FaGlobe size={28} />, titleKey: 'vm.goal1.title', descKey: 'vm.goal1.desc', year: '2026' },
        { icon: <FaFlask size={28} />, titleKey: 'vm.goal2.title', descKey: 'vm.goal2.desc', year: '2025' },
        { icon: <FaHeart size={28} />, titleKey: 'vm.goal3.title', descKey: 'vm.goal3.desc', year: '2026' },
        { icon: <FaUsers size={28} />, titleKey: 'vm.goal4.title', descKey: 'vm.goal4.desc', year: '2025' },
    ];

    return (
        <div className="page-wrapper">
            <section className="page-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1 className="page-hero__title">{t('vm.title')}</h1>
                        <p className="page-hero__subtitle">{t('vm.subtitle')}</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Vision & Mission Cards - Vertical */}
            <section className="section">
                <div className="container">
                    <div className="vm-stack">
                        <AnimatedSection>
                            <div className="vm-card vm-card--vision">
                                <h2>{t('vm.vision.title')}</h2>
                                <p>{t('vm.vision.text')}</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="vm-card vm-card--mission">
                                <h2>{t('vm.mission.title')}</h2>
                                <p>{t('vm.mission.text')}</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Strategic Goals */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>{t('vm.goals.title')}</h2>
                        </div>
                    </AnimatedSection>

                    <div className="goals-timeline">
                        {goals.map((g, i) => (
                            <AnimatedSection key={i} delay={i * 150}>
                                <div className="goal-card">
                                    <div className="goal-card__marker">
                                        <div className="goal-card__icon">{g.icon}</div>
                                        <span className="goal-card__year">{g.year}</span>
                                    </div>
                                    <div className="goal-card__content">
                                        <h3>{t(g.titleKey)}</h3>
                                        <p>{t(g.descKey)}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
