import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { FaQuoteLeft, FaStar, FaIndustry, FaDiagramProject, FaFaceSmile, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function References() {
    const { t } = useLanguage();

    const testimonials = [
        { textKey: 'references.t1.text', authorKey: 'references.t1.author', roleKey: 'references.t1.role' },
        { textKey: 'references.t2.text', authorKey: 'references.t2.author', roleKey: 'references.t2.role' },
        { textKey: 'references.t3.text', authorKey: 'references.t3.author', roleKey: 'references.t3.role' },
    ];

    const partnerNames = [
        'TechVentures', 'DataFlow', 'IndustriTech',
        'SmartLogic', 'CloudNest', 'DigiWave',
        'NexGen', 'ByteCraft',
    ];

    const refStats = [
        { icon: <FaIndustry size={28} />, value: '8+', label: t('references.industries') },
        { icon: <FaDiagramProject size={28} />, value: '50+', label: t('references.projectsCompleted') },
        { icon: <FaFaceSmile size={28} />, value: '%98', label: t('references.clientSatisfaction') },
    ];

    // Testimonials carousel state
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, [nextTestimonial]);

    // Partners carousel state
    const [partnerOffset, setPartnerOffset] = useState(0);
    const visiblePartners = 4;

    const nextPartner = useCallback(() => {
        setPartnerOffset((prev) => (prev + 1) % partnerNames.length);
    }, [partnerNames.length]);

    const prevPartner = () => {
        setPartnerOffset((prev) => (prev - 1 + partnerNames.length) % partnerNames.length);
    };

    useEffect(() => {
        const timer = setInterval(nextPartner, 3000);
        return () => clearInterval(timer);
    }, [nextPartner]);

    const getVisiblePartners = () => {
        const result = [];
        for (let i = 0; i < visiblePartners; i++) {
            result.push(partnerNames[(partnerOffset + i) % partnerNames.length]);
        }
        return result;
    };

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

            {/* Testimonials Carousel */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>{t('references.testimonials.title')}</h2>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={150}>
                        <div className="carousel">
                            <button className="carousel__btn carousel__btn--prev" onClick={prevTestimonial} aria-label="Previous">
                                <FaChevronLeft size={18} />
                            </button>

                            <div className="carousel__track">
                                {testimonials.map((tm, i) => (
                                    <div
                                        key={i}
                                        className={`carousel__slide ${i === currentTestimonial ? 'carousel__slide--active' : ''}`}
                                    >
                                        <div className="testimonial-carousel-card">
                                            <FaQuoteLeft size={28} className="testimonial-carousel-card__quote" />
                                            <p className="testimonial-carousel-card__text">{t(tm.textKey)}</p>
                                            <div className="testimonial-carousel-card__stars">
                                                {[...Array(5)].map((_, si) => (
                                                    <FaStar key={si} size={16} />
                                                ))}
                                            </div>
                                            <div className="testimonial-carousel-card__author">
                                                <div className="testimonial-carousel-card__avatar">
                                                    {t(tm.authorKey).charAt(0)}
                                                </div>
                                                <div>
                                                    <strong>{t(tm.authorKey)}</strong>
                                                    <span>{t(tm.roleKey)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="carousel__btn carousel__btn--next" onClick={nextTestimonial} aria-label="Next">
                                <FaChevronRight size={18} />
                            </button>

                            <div className="carousel__dots">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`carousel__dot ${i === currentTestimonial ? 'carousel__dot--active' : ''}`}
                                        onClick={() => setCurrentTestimonial(i)}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Partners Carousel */}
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>{t('references.partners.title')}</h2>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <div className="partners-carousel">
                            <button className="carousel__btn carousel__btn--prev" onClick={prevPartner} aria-label="Previous">
                                <FaChevronLeft size={18} />
                            </button>

                            <div className="partners-carousel__track">
                                {getVisiblePartners().map((name, i) => (
                                    <div key={`${name}-${i}`} className="partner-card">
                                        <span className="partner-card__letter">{name.charAt(0)}</span>
                                        <span className="partner-card__name">{name}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="carousel__btn carousel__btn--next" onClick={nextPartner} aria-label="Next">
                                <FaChevronRight size={18} />
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
