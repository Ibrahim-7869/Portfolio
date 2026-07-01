import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with validation
const getSupabaseClient = () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  
  if (!url || !key || url.includes('your_') || key.includes('your_')) {
    console.warn('Supabase credentials not configured. Please update .env.local with your actual Supabase credentials.');
    return null;
  }
  
  try {
    return createClient(url, key);
  } catch (err) {
    console.error('Failed to initialize Supabase:', err);
    return null;
  }
};

const supabase = getSupabaseClient();

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [data, setData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      if (!supabase) {
        throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment.');
      }

      // Save to Supabase database
      // The database trigger will automatically call the Edge Function to send email
      const { error: dbError } = await supabase.from('contact_messages').insert({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      setStatus('success');
      setData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      console.error('Contact form error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Section number */}
      <div className="section-number">06</div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-[#262626]" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#ff6b35]">06</span>
            <h2 className="font-display text-4xl font-bold text-white">CONTACT</h2>
          </div>
          <div className="flex-1 h-px bg-[#262626]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left - Contact info */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              {/* Large header */}
              <div className="mb-12">
                <h3 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  LET'S
                  <br />
                  <span className="text-[#ff6b35]">BUILD</span>
                  <br />
                  TOGETHER
                </h3>
                <p className="text-[#737373] leading-relaxed">
                  Have a project in mind or want to discuss opportunities? I'm currently looking for junior backend developer roles.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:border-[#ff6b35] transition-colors">
                    <Mail className="w-5 h-5 text-[#525252] group-hover:text-[#ff6b35] transition-colors" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#525252] uppercase mb-1">Email</div>
                    <a href="mailto:Majidibrahim113@gmail.com" className="text-white hover:text-[#ff6b35] transition-colors">
                      Majidibrahim113@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:border-[#ff6b35] transition-colors">
                    <Phone className="w-5 h-5 text-[#525252] group-hover:text-[#ff6b35] transition-colors" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#525252] uppercase mb-1">Phone</div>
                    <a href="tel:+923256397906" className="text-white hover:text-[#ff6b35] transition-colors">
                      +92 325 6397906
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:border-[#ff6b35] transition-colors">
                    <MapPin className="w-5 h-5 text-[#525252] group-hover:text-[#ff6b35] transition-colors" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#525252] uppercase mb-1">Location</div>
                    <span className="text-white">Bahawalpur, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-[#ff6b35]/5 border border-[#ff6b35]/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-white">AVAILABLE FOR OPPORTUNITIES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-[#141414] border border-[#262626] overflow-hidden">
              {/* Form header */}
              <div className="p-6 border-b border-[#262626] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-xs text-[#525252]">contact-form.tsx</span>
              </div>

              {/* Form content */}
              <div className="p-8">
                {/* Status messages */}
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-400 text-sm">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-400 text-sm">{error}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs text-[#525252] uppercase mb-3">
                      <span className="text-[#ff6b35] mr-2">01</span>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-[#404040] font-mono text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs text-[#525252] uppercase mb-3">
                      <span className="text-[#ff6b35] mr-2">02</span>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-[#404040] font-mono text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label className="block font-mono text-xs text-[#525252] uppercase mb-3">
                    <span className="text-[#ff6b35] mr-2">03</span>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job Opportunity / Project Collaboration"
                    className="w-full bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-[#404040] font-mono text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block font-mono text-xs text-[#525252] uppercase mb-3">
                    <span className="text-[#ff6b35] mr-2">04</span>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-[#0a0a0a] border border-[#262626] px-4 py-3 text-white placeholder-[#404040] font-mono text-sm focus:outline-none focus:border-[#ff6b35] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#ff6b35] text-black font-display font-semibold text-sm hover:bg-[#ff8555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
