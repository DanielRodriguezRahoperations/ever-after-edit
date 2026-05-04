import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@everaftereditfl.com';

const budgetOptions = [
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
];

const interestOptions = [
  'Welcome Installation',
  'Seating Chart Display',
  'Statement Installations',
  'Custom Build Details (cornhole boards, surfboard signage, etc.)',
  'Rentals (phone booth, bar, etc.)',
  'Full Signage Suite',
  'Not sure yet',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  budget: string;
  interests: string[];
  vision: string;
}

const emptyForm: FormState = {
  name: '',
  email: '',
  phone: '',
  weddingDate: '',
  location: '',
  budget: '',
  interests: [],
  vision: '',
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Inquire() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};

    if (!form.name.trim()) newErrors.name = 'Your name is required.';

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'A valid email address is required.';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'A phone number is required.';
    }

    if (!form.weddingDate) newErrors.weddingDate = 'Please provide your wedding date.';
    if (!form.location.trim()) newErrors.location = 'Please include your venue or location.';
    if (!form.budget) newErrors.budget = 'Please select an approximate budget.';
    if (!form.vision.trim()) newErrors.vision = 'Please tell us a little about your vision.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmitError('');

    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleInterestToggle = (option: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(option)
        ? prev.interests.filter((i) => i !== option)
        : [...prev.interests, option],
    }));
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    const formData = new FormData();

    formData.append('_subject', `New Wedding Inquiry from ${form.name}`);
    formData.append('_template', 'table');
    formData.append('Name', form.name);
    formData.append('Email', form.email);
    formData.append('Phone', form.phone);
    formData.append('Wedding Date', form.weddingDate);
    formData.append('Location / Venue', form.location);
    formData.append('Estimated Investment', form.budget);
    formData.append(
      'Interested In',
      form.interests.length ? form.interests.join(', ') : 'None selected'
    );
    formData.append('Vision', form.vision);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitted(true);
      setForm(emptyForm);
    } catch (error) {
      setSubmitError(
        'Something went wrong while submitting your inquiry. Please email us directly at info@everaftereditfl.com.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputBase =
    'w-full bg-transparent border-b border-border py-3.5 text-ink font-body text-sm placeholder:text-ink-secondary/50 focus:outline-none focus:border-accent transition-colors duration-300';

  const selectBase =
    'w-full bg-transparent border-b border-border py-3.5 text-sm font-body focus:outline-none focus:border-accent transition-colors duration-300 appearance-none cursor-pointer';

  return (
    <main className="pt-16 md:pt-20">

      {/* HERO */}
      <section className="bg-ink overflow-hidden py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
            >
              <p className="text-accent text-xs tracking-[0.4em] uppercase font-body mb-6">Custom Commissions</p>
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream leading-[0.88]">
                Begin Your<br />
                <em className="text-accent">Inquiry.</em>
              </h1>
            </motion.div>
            <motion.p
              className="text-cream/55 font-body text-base leading-relaxed max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.35 }}
            >
              We take on a limited number of commissions each season. Every piece is fully custom, intentionally designed, and built to the highest standard.
            </motion.p>
          </div>

          <motion.div
            className="mt-16 md:mt-20 grid grid-cols-3 border-t border-white/10 pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
          >
            {[
              { stat: '24–48h', label: 'Response Time' },
              { stat: 'Limited', label: 'Bookings Per Season' },
              { stat: '100%', label: 'Custom Design' },
            ].map((item, i) => (
              <div key={item.label} className={`pr-8 ${i > 0 ? 'pl-8 border-l border-white/10' : ''}`}>
                <p className="font-heading text-3xl md:text-4xl text-accent mb-2">{item.stat}</p>
                <p className="text-cream/40 font-body text-xs uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl text-ink leading-tight mb-8">
              Let's create something<br />
              <em>extraordinary together.</em>
            </h2>
            <p className="text-ink-secondary font-body text-base leading-relaxed mb-5">
              Complete the inquiry form and we'll be in touch within 24–48 hours to begin the design conversation.
            </p>
            <p className="text-ink-secondary font-body text-base leading-relaxed mb-10">
              Every project begins with a one-on-one consultation — no templates, no rush, only considered work.
            </p>

            <div className="space-y-8 border-t border-border pt-10">
              {[
                {
                  label: 'Turnaround',
                  value: 'All inquiries receive a response within 24–48 hours.',
                },
                {
                  label: 'Availability',
                  value: 'We book a limited number of projects each season and recommend inquiring early to secure your date.',
                },
                {
                  label: 'Process',
                  value: 'Every project begins with a design consultation where we learn your vision, venue, and overall aesthetic. From there, we develop a fully custom concept, refine the details, and bring each piece to life.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                >
                  <p className="text-ink font-body text-xs tracking-widest uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="text-ink-secondary font-body text-sm leading-relaxed">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-cream-secondary border border-border">
              <p className="text-ink font-body text-xs tracking-widest uppercase mb-3">Direct Contact</p>
              <p className="text-ink-secondary font-body text-sm leading-relaxed">
                Prefer to reach out directly? Email us at{' '}
                <a
                  href="mailto:info@everaftereditfl.com"
                  className="text-accent hover:underline underline-offset-4 transition-colors"
                >
                  info@everaftereditfl.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-cream-secondary border border-border p-12 md:p-14">
                <p className="text-accent text-xs tracking-[0.4em] uppercase font-body mb-5">Inquiry Received</p>
                <h2 className="font-heading text-2xl md:text-3xl text-ink mb-6 leading-snug">
                  Congratulations — your inquiry has been received.
                </h2>
                <p className="text-ink-secondary font-body text-base leading-relaxed mb-5">
                  Thank you for reaching out to The Ever After Edit. We're honored to be considered for your wedding day.
                </p>
                <p className="text-ink-secondary font-body text-base leading-relaxed mb-5">
                  Our team will review your details and contact you within 24–48 hours.
                </p>
                <p className="text-ink-secondary font-body text-sm leading-relaxed">
                  If you have any additional questions, please email us at info@everaftereditfl.com.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputBase}
                  />
                  {errors.name && <p className="text-accent text-xs font-body mt-2">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputBase}
                    required
                  />
                  {errors.email && <p className="text-accent text-xs font-body mt-2">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className={inputBase}
                    required
                  />
                  {errors.phone && <p className="text-accent text-xs font-body mt-2">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      name="weddingDate"
                      value={form.weddingDate}
                      onChange={handleChange}
                      className={inputBase}
                    />
                    {errors.weddingDate && (
                      <p className="text-accent text-xs font-body mt-2">{errors.weddingDate}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                      Location / Venue
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City, State or Venue Name"
                      className={inputBase}
                    />
                    {errors.location && (
                      <p className="text-accent text-xs font-body mt-2">{errors.location}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                    Estimated Investment
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={`${selectBase} ${form.budget ? 'text-ink' : 'text-ink-secondary/50'}`}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="text-ink bg-cream">
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-ink-secondary pointer-events-none">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-ink-secondary font-body text-xs mt-2 leading-relaxed">
                    Most of our custom projects fall between $1,500–$5,000+ depending on scope.
                  </p>
                  {errors.budget && <p className="text-accent text-xs font-body mt-2">{errors.budget}</p>}
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-3">
                    What are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((option) => {
                      const selected = form.interests.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleInterestToggle(option)}
                          className={`font-body text-xs px-3 py-2 border transition-colors duration-200 text-left ${
                            selected
                              ? 'border-ink bg-ink text-cream'
                              : 'border-border text-ink-secondary hover:border-ink hover:text-ink'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                    Your Vision
                  </label>
                  <textarea
                    name="vision"
                    value={form.vision}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your wedding aesthetic, the pieces you're interested in, and anything inspiring your vision."
                    className={`${inputBase} resize-none`}
                  />
                  {errors.vision && <p className="text-accent text-xs font-body mt-2">{errors.vision}</p>}
                </div>

                {submitError && (
                  <p className="text-accent text-sm font-body leading-relaxed">
                    {submitError}
                  </p>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full text-center justify-center"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Your Inquiry'}
                  </Button>
                  <p className="text-ink-secondary font-body text-xs mt-4 leading-relaxed">
                    This is a custom project inquiry — we'll review your details and follow up to begin the design process.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
            {[
              {
                stat: 'Limited',
                label: 'Bookings Per Season',
                note: 'Every project receives our full, undivided attention.',
              },
              {
                stat: '100%',
                label: 'Custom Design',
                note: 'Nothing is templated. Everything is made for you.',
              },
              {
                stat: 'Bespoke',
                label: 'From Concept to Delivery',
                note: 'One-on-one consultation and white-glove delivery.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className={`py-10 md:py-0 md:px-10 first:pl-0 last:pr-0 border-b md:border-b-0 md:border-r border-white/10 last:border-0`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease, delay: i * 0.1 }}
              >
                <p className="font-heading text-4xl md:text-5xl text-accent mb-3">{item.stat}</p>
                <p className="font-body text-xs tracking-widest uppercase text-cream/50 mb-4">
                  {item.label}
                </p>
                <p className="text-cream/40 font-body text-sm leading-relaxed">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
