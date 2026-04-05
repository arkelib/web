import { useLanguage } from '../i18n/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { FaChartBar, FaLanguage, FaCamera, FaRobot, FaArrowRight, FaCheck } from 'react-icons/fa6';

export default function Products() {
    const { t } = useLanguage();

    const products = [
        {
            icon: <FaChartBar size={32} />,
            titleKey: 'products.p1.title',
            descKey: 'products.p1.desc',
            featuresKey: 'products.p1.features',
            color: '#3b82f6',
            gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            status: 'active',
        },
        {
            icon: <FaLanguage size={32} />,
            titleKey: 'products.p2.title',
            descKey: 'products.p2.desc',
            featuresKey: 'products.p2.features',
            color: '#06b6d4',
            gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            status: 'active',
        },
        {
            icon: <FaCamera size={32} />,
            titleKey: 'products.p3.title',
            descKey: 'products.p3.desc',
            featuresKey: 'products.p3.features',
            color: '#8b5cf6',
            gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
            status: 'coming',
        },
        {
            icon: <FaRobot size={32} />,
            titleKey: 'products.p4.title',
            descKey: 'products.p4.desc',
            featuresKey: 'products.p4.features',
            color: '#6366f1',
            gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            status: 'coming',
        },
    ];

    return (
        <div className="page-wrapper">
            <section className="page-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1 className="page-hero__title">{t('products.title')}</h1>
                        <p className="page-hero__subtitle">{t('products.subtitle')}</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="products-list">
                        {products.map((p, i) => (
                            <AnimatedSection key={i} delay={i * 150}>
                                <div className="product-card-v2">
                                    <div className="product-card-v2__accent" style={{ background: p.gradient }} />
                                    <div className="product-card-v2__body">
                                        <div className="product-card-v2__top">
                                            <div className="product-card-v2__icon" style={{ background: `${p.color}15`, color: p.color }}>
                                                {p.icon}
                                            </div>
                                            <div className="product-card-v2__meta">
                                                <h3 className="product-card-v2__title">{t(p.titleKey)}</h3>
                                                {p.status === 'coming' && (
                                                    <span className="product-card-v2__badge">{t('products.comingSoon')}</span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="product-card-v2__desc">{t(p.descKey)}</p>
                                        <div className="product-card-v2__features">
                                            {t(p.featuresKey).split(',').map((feat, fi) => (
                                                <div key={fi} className="product-card-v2__feature">
                                                    <FaCheck size={12} style={{ color: p.color }} />
                                                    <span>{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="product-card-v2__cta" style={{ borderColor: `${p.color}40`, color: p.color }}>
                                            {t('products.learnMore')} <FaArrowRight size={14} />
                                        </button>
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
