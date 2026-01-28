import React, { useState } from 'react';
import { Send, ArrowRight, Copy, Check } from 'lucide-react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText('sanjumahalakshmi12@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const serviceId = 'service_cw9a0ww';
    const templateId = 'template_xw75uhu';
    const publicKey = 'XEnmDteQGfgktRQm3';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Mahalakshmi',
      message: message,
    }

    //To send email using EmailJS (dynamically imported to reduce initial bundle size)
    const { default: emailjs } = await import('@emailjs/browser');
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      setStatus('error');
    });
  }

  return (
    <Section id="contact" className="pb-20">
        <div className="bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#1E1B4B] dark:from-[#0F172A] dark:via-[#1E1B4B] dark:to-[#020617] text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl transition-all duration-500 border border-white/5">
            
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-1000 pointer-events-none"></div>

             <div className="absolute inset-0 opacity-30 pointer-events-none z-0 mix-blend-overlay" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-start">
                
                <div className="lg:col-span-7 flex flex-col justify-between h-full min-h-[500px]">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-300/20 bg-indigo-950/30 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-8 shadow-lg text-indigo-100">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for Work Opportunities
                        </div>
                        
                        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] mb-6 sm:mb-8 drop-shadow-sm">
                            Let's start a <br/> 
                            <span className="italic font-light text-indigo-200">conversation.</span>
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl text-indigo-100/80 max-w-md leading-relaxed mb-8 sm:mb-12 font-medium text-balance">
                            Interested in working together? I'm currently open to entry-level opportunities for 2026 and freelance projects.
                        </p>
                    </div>

                    <div className="mb-12 lg:mb-0">
                        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-indigo-200 opacity-60">Drop me an email</p>
                        <button 
                            onClick={copyEmail}
                            className="group flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif hover:text-indigo-200 transition-colors text-left"
                        >
                            <span className="underline decoration-1 underline-offset-4 sm:underline-offset-8 decoration-white/20 break-all sm:break-normal group-hover:decoration-indigo-300 transition-all">
                                sanjumahalakshmi12@gmail.com
                            </span>
                            <span className="p-2 sm:p-3 shrink-0 rounded-full bg-white/10 group-hover:bg-white group-hover:text-indigo-900 group-hover:scale-110 transition-all duration-300 mt-1 sm:mt-0">
                                {copied ? <Check size={18} className="sm:w-6 sm:h-6" /> : <Copy size={18} className="sm:w-6 sm:h-6" />}
                            </span>
                        </button>
                    </div>

                     <div className="flex flex-wrap gap-4 md:gap-6 mt-auto">
                         {SOCIAL_LINKS.filter(l => l.platform !== 'Email' && l.platform !== 'Location').map(link => (
                             <a 
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 text-sm font-bold tracking-wide uppercase flex items-center gap-2 group"
                             >
                                {link.platform} 
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                             </a>
                         ))}
                    </div>
                </div>

                <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                    <div className="absolute -top-12 -right-4 md:-right-12 z-20 transform rotate-12 pointer-events-none mix-blend-soft-light opacity-70">
                         <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-200 w-24 h-24 md:w-36 md:h-36">
                            <circle cx="70" cy="70" r="68" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
                            <path id="textPath" d="M 70 70 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0" fill="transparent"/>
                            <text className="text-[10px] font-bold uppercase tracking-[0.2em]" fill="currentColor">
                                <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                                    Mahalakshmi • Portfolio • 2025 •
                                </textPath>
                            </text>
                            <text x="70" y="75" textAnchor="middle" className="text-2xl font-serif font-bold" fill="currentColor">M.</text>
                        </svg>
                    </div>

                    <div className="bg-[#FDFCF8] text-gray-900 p-6 sm:p-8 md:p-10 rounded-sm shadow-2xl relative transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-white/10">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#E2D9C2] opacity-90 rotate-[-2deg] shadow-sm backdrop-blur-sm z-20"></div>

                        <div className="absolute top-0 left-0 w-full h-1.5 bg-repeating-linear-gradient(45deg, #312E81, #312E81 10px, #ffffff 10px, #ffffff 20px, #94A3B8 20px, #94A3B8 30px, #ffffff 30px, #ffffff 40px)"></div>

                        <Reveal>
                          <h3 className="font-hand text-3xl sm:text-4xl md:text-5xl text-[#312E81] mb-6 sm:mb-8 mt-2 sm:mt-4 font-bold transform -rotate-1 animate-subtle-float block">Send a note... ✏️</h3>
                        </Reveal>

                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                             <div className="group">
                                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 text-gray-400 group-focus-within:text-[#312E81] transition-colors">Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-transparent border-b border-gray-300 py-1.5 sm:py-2 focus:outline-none focus:border-[#312E81] transition-colors font-serif text-base sm:text-lg placeholder-gray-300 text-gray-800"
                                    placeholder="Jane Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                             </div>
                             <div className="group">
                                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 text-gray-400 group-focus-within:text-[#312E81] transition-colors">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-transparent border-b border-gray-300 py-1.5 sm:py-2 focus:outline-none focus:border-[#312E81] transition-colors font-serif text-base sm:text-lg placeholder-gray-300 text-gray-800"
                                    placeholder="jane@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                             </div>
                             <div className="group">
                                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 text-gray-400 group-focus-within:text-[#312E81] transition-colors">Message</label>
                                <textarea 
                                    rows={4} 
                                    className="w-full bg-transparent border-b border-gray-300 py-1.5 sm:py-2 focus:outline-none focus:border-[#312E81] transition-colors font-serif text-base sm:text-lg resize-none leading-relaxed placeholder-gray-300 text-gray-800"
                                    placeholder="Hi Mahalakshmi, I'd love to chat about..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                             </div>

                             <button type="submit" disabled={status === 'loading'} className="w-full py-3 sm:py-4 bg-[#312E81] hover:bg-[#2A2765] text-white font-bold uppercase tracking-widest transition-all transform active:scale-[0.99] flex justify-between items-center px-5 sm:px-6 mt-3 sm:mt-4 group shadow-lg rounded-md text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed">
                                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                                <Send size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform text-indigo-200" />
                             </button>
                             {status === 'success' && <div className="mt-3 p-3 bg-green-100 text-green-800 rounded-md text-sm">Email sent successfully! 🎉</div>}
                             {status === 'error' && <div className="mt-3 p-3 bg-red-100 text-red-800 rounded-md text-sm">Error sending email. Please try again.</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  );
};

export default Contact;
