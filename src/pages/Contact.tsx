import { useState, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import {
    FaLocationDot, FaPhone, FaEnvelope, FaClock,
    FaPaperPlane, FaCheck
} from 'react-icons/fa6';

export default function Contact() {
    const { t } = useLanguage();
    const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setFormState('sending');
        setTimeout(() => {
            setFormState('sent');
            setForm({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setFormState('idle'), 4000);
        }, 1500);
    };

    const contactInfo = [
        { icon: <FaLocationDot size={20} />, label: t('contact.info.address'), value: t('contact.info.addressValue') },
        { icon: <FaPhone size={20} />, label: t('contact.info.phone'), value: t('contact.info.phoneValue') },
        { icon: <FaEnvelope size={20} />, label: t('contact.info.email'), value: t('contact.info.emailValue') },
        { icon: <FaClock size={20} />, label: t('contact.info.hours'), value: t('contact.info.hoursValue') },
    ];



    return (
        <div className="page-wrapper">
            <section className="page-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1 className="page-hero__title">{t('contact.title')}</h1>
                        <p className="page-hero__subtitle">{t('contact.subtitle')}</p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <AnimatedSection>
                            <div className="contact-form-card">
                                <h2>{t('contact.form.title')}</h2>
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <input
                                            id="contact-name"
                                            type="text"
                                            placeholder={t('contact.form.name')}
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            id="contact-email"
                                            type="email"
                                            placeholder={t('contact.form.email')}
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            placeholder={t('contact.form.subject')}
                                            value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            id="contact-message"
                                            placeholder={t('contact.form.message')}
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary contact-form__submit"
                                        disabled={formState !== 'idle'}
                                    >
                                        {formState === 'sending' ? (
                                            <>{t('contact.form.sending')}</>
                                        ) : formState === 'sent' ? (
                                            <><FaCheck /> {t('contact.form.success').split('!')[0]}!</>
                                        ) : (
                                            <><FaPaperPlane /> {t('contact.form.send')}</>
                                        )}
                                    </button>
                                    {formState === 'sent' && (
                                        <p className="contact-form__success">{t('contact.form.success')}</p>
                                    )}
                                </form>
                            </div>
                        </AnimatedSection>

                        {/* Info */}
                        <AnimatedSection delay={200}>
                            <div className="contact-info">
                                <h2>{t('contact.info.title')}</h2>
                                <div className="contact-info__list">
                                    {contactInfo.map((item, i) => (
                                        <div key={i} className="contact-info__item">
                                            <div className="contact-info__icon">{item.icon}</div>
                                            <div>
                                                <strong>{item.label}</strong>
                                                <span>{item.value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
