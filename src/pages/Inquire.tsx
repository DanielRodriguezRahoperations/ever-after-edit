// =========================================================
// INQUIRE PAGE — LOCKED. DO NOT MODIFY.
// All layouts, form fields, and text on this page are client-approved.
// Do NOT restructure sections, alter form logic, or add/remove content.
// Edit in place only, and only when explicitly instructed.
// =========================================================
import { useState } from 'react';
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
  weddingDate: string;
  location: string;
  budget: string;
  interests: string[];
  vision: string;
}

const emptyForm: FormState = {
  name: '',
  email: '',
  weddingDate: '',
  location: '',
  budget: '',
  interests: [],
  vision: '',
};

export default function Inquire() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Your name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'A valid email address is required.';
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

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Wedding Inquiry from ${form.name}`,
          _template: 'table',
          name: form.name,
          email: form.email,
          weddingDate: form.weddingDate,
          location: form.location,
          budget: form.budget,
          interests: form.interests.length ? form.interests.join(', ') : 'None selected',
          vision: form.vision,
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
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
      {/* Page Header */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <p className="section-label mb-5">Custom Commissions</p>
            <h1 className="font-heading text-4xl md:text-5xl text-ink leading-tight mb-8">
              Let's create something extraordinary together.
            </h1>
            <p className="text-ink-secondary font-body text-base leading-relaxed mb-5">
              We take on a limited number of commissions each season to ensure every piece is fully custom, intentionally designed, and built to the highest standard.
            </p>
            <p className="text-ink-secondary font-body text-base leading-relaxed mb-10">
              Complete the inquiry form and we'll be in touch within 24–48 hours to begin the design conversation.
            </p>

            <div className="space-y-6 border-t border-border pt-10">
              {[
                { label: 'Turnaround', value: 'All inquiries receive a response within 24–48 hours.' },
                { label: 'Availability', value: 'We book a limited number of projects each season and recommend inquiring early to secure your date.' },
                { label: 'Process', value: 'Every project begins with a design consultation where we learn your vision, venue, and overall aesthetic. From there, we develop a fully custom concept, refine the details, and bring each piece to life through thoughtful design and build.' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-ink font-body text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-ink-secondary font-body text-sm leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-cream-secondary border border-border p-12 md:p-14">
                <p className="section-label mb-5">Inquiry Received</p>
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
                  {errors.name && (
                    <p className="text-accent text-xs font-body mt-2">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-ink-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={inputBase}
                  />
                  {errors.email && (
                    <p className="text-accent text-xs font-body mt-2">{errors.email}</p>
                  )}
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
                  {errors.budget && (
                    <p className="text-accent text-xs font-body mt-2">{errors.budget}</p>
                  )}
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
                  {errors.vision && (
                    <p className="text-accent text-xs font-body mt-2">{errors.vision}</p>
                  )}
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
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-cream-secondary py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
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
            ].map((item) => (
              <div key={item.label}>
                <p className="font-heading text-4xl md:text-5xl text-accent mb-2">{item.stat}</p>
                <p className="font-body text-xs tracking-widest uppercase text-ink mb-3">
                  {item.label}
                </p>
                <p className="text-ink-secondary font-body text-sm leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
