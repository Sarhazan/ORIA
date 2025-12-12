import React, { useState } from 'react';
import { GlowButton } from './ui/GlowButton';
import { GlassCard } from './ui/GlassCard';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormState, FormStatus } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API Call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus(FormStatus.SUCCESS);
      setFormData({ name: '', phone: '', email: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(FormStatus.IDLE), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <GlassCard className="border-morocco-orange/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-white">
                  בואו לבשל <span className="text-morocco-orange">איתי!</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  השאירו פרטים ואחזור אליכם בהקדם לתיאום תאריך לסדנה הקרובה. מספר המקומות מוגבל בהחלט.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span>אורך הסדנה: כ-3 שעות</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span>כשרות: מהדרין</span>
                </div>
                 <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                  <span>מיקום: המטבח של אוריה, רחובות</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-morocco-orange focus:ring-1 focus:ring-morocco-orange transition-all placeholder-gray-600"
                  placeholder="ישראל ישראלי"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-morocco-orange focus:ring-1 focus:ring-morocco-orange transition-all placeholder-gray-600"
                  placeholder="050-0000000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">אימייל (לא חובה)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-morocco-orange focus:ring-1 focus:ring-morocco-orange transition-all placeholder-gray-600"
                  placeholder="example@email.com"
                />
              </div>

              <div className="pt-4">
                {status === FormStatus.SUCCESS ? (
                  <div className="w-full py-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-300 flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>הפרטים נשלחו בהצלחה! ניצור קשר בקרוב.</span>
                  </div>
                ) : (
                   <GlowButton type="submit" fullWidth disabled={status === FormStatus.SUBMITTING}>
                    {status === FormStatus.SUBMITTING ? 'שולח...' : 'אני רוצה להרשם!'}
                    {!status && <Send className="w-4 h-4 mr-2" />}
                  </GlowButton>
                )}
              </div>
            </form>

          </div>
        </GlassCard>
      </div>
    </section>
  );
};