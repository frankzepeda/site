import React, { useState, useEffect } from 'react';
import { ArrowRight, Lightbulb, TrendingUp, Users, Mail, Phone, Linkedin, ChevronDown } from 'lucide-react';

export default function FrankZepedaWebsite() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight">
            <span className="text-slate-900">Frank Zepeda</span>
            <span className="text-amber-600 ml-2">.</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Services', 'Expertise', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-700 hover:text-amber-600 transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 text-white px-6 py-2 hover:bg-amber-600 transition-all duration-300 text-sm font-medium tracking-wide"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" style={{ animation: 'fadeInUp 1s ease-out' }}>
              <div className="inline-block">
                <div className="text-amber-500 text-sm font-medium tracking-widest mb-4 uppercase">
                  Zepeda Consulting Group
                </div>
              </div>
              
              <h1 className="font-serif text-6xl md:text-7xl font-bold text-white leading-tight">
                Strategic Marketing
                <span className="block text-amber-500 mt-2">Excellence</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                With over 25 years of experience in advertising and marketing, we help brands tell their story through AI-powered strategies and data-driven analytics.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group bg-amber-600 text-white px-8 py-4 hover:bg-amber-500 transition-all duration-300 flex items-center gap-2 text-lg font-medium"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => scrollToSection('expertise')}
                  className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg font-medium"
                >
                  Explore Our Work
                </button>
              </div>
            </div>

            <div className="hidden md:block relative" style={{ animation: 'fadeInRight 1s ease-out 0.3s backwards' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-blue-600 opacity-20 blur-2xl"></div>
                <div className="relative bg-slate-800 p-8 border border-slate-700">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 bg-amber-600 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">25+</div>
                        <div className="text-sm text-slate-400">Years Experience</div>
                      </div>
                    </div>
                    <div className="h-px bg-slate-700"></div>
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">AI-Powered</div>
                        <div className="text-sm text-slate-400">Strategic Solutions</div>
                      </div>
                    </div>
                    <div className="h-px bg-slate-700"></div>
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 bg-emerald-600 flex items-center justify-center">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold">Results</div>
                        <div className="text-sm text-slate-400">Data-Driven Impact</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-amber-600 text-sm font-medium tracking-widest uppercase">
                AI-Forward Thinking
              </div>
              <h2 className="font-serif text-5xl font-bold text-slate-900 leading-tight">
                Innovation Meets 
                <span className="block text-amber-600 mt-2">Experience</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Zepeda Consulting Group, we don't just follow trends—we create them. Our approach combines decades of advertising expertise with cutting-edge AI technology to deliver strategies that resonate and results that matter.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe every brand has a unique story worth telling. Through AI-powered analytics and strategic planning, we help you discover that story and share it with the world in ways that drive real business impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Strategic Planning', desc: 'Data-driven roadmaps for success' },
                { title: 'Brand Storytelling', desc: 'Narratives that captivate audiences' },
                { title: 'AI Integration', desc: 'Next-generation marketing tools' },
                { title: 'Analytics & Insights', desc: 'Measurable, actionable results' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="group bg-slate-50 p-6 hover:bg-slate-900 transition-all duration-500 cursor-pointer border-l-4 border-transparent hover:border-amber-600"
                  style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards` }}
                >
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-white transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4">
              What We Do
            </div>
            <h2 className="font-serif text-5xl font-bold mb-6">
              Comprehensive Marketing Solutions
            </h2>
            <p className="text-xl text-slate-300">
              We create strategic plans that help brands tell their story using AI and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Strategic Marketing',
                desc: 'Comprehensive marketing strategies built on data insights and 25+ years of industry expertise.',
                features: ['Market Analysis', 'Competitive Research', 'Growth Planning', 'ROI Optimization']
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: 'AI-Powered Solutions',
                desc: 'Leverage cutting-edge AI technology to gain competitive advantages and drive efficiency.',
                features: ['Predictive Analytics', 'Automated Insights', 'AI Strategy', 'Tool Integration']
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Brand Development',
                desc: 'Craft compelling brand narratives that resonate with your audience and drive engagement.',
                features: ['Brand Strategy', 'Content Creation', 'Storytelling', 'Campaign Management']
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group bg-slate-800 p-8 hover:bg-gradient-to-br hover:from-amber-600 hover:to-amber-700 transition-all duration-500 border border-slate-700 hover:border-transparent"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s backwards` }}
              >
                <div className="w-16 h-16 bg-amber-600 group-hover:bg-white flex items-center justify-center mb-6 transition-all duration-500">
                  <div className="text-white group-hover:text-amber-600 transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 group-hover:text-white mb-6 transition-colors">
                  {service.desc}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 bg-amber-500 group-hover:bg-white transition-colors"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-amber-600 text-sm font-medium tracking-widest uppercase mb-4">
              Our Approach
            </div>
            <h2 className="font-serif text-5xl font-bold text-slate-900 mb-6">
              The Zepeda Difference
            </h2>
            <p className="text-xl text-slate-600">
              Experience, innovation, and results-driven strategies that transform businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discovery', desc: 'Deep dive into your brand, market, and objectives' },
              { num: '02', title: 'Strategy', desc: 'AI-powered insights meet strategic planning' },
              { num: '03', title: 'Execution', desc: 'Precise implementation with continuous optimization' },
              { num: '04', title: 'Results', desc: 'Data-driven outcomes that exceed expectations' }
            ].map((step, idx) => (
              <div 
                key={idx}
                className="relative bg-white p-8 group hover:shadow-2xl transition-all duration-500 border-t-4 border-amber-600"
                style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                <div className="text-6xl font-serif font-bold text-slate-100 group-hover:text-amber-100 transition-colors mb-4">
                  {step.num}
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">
                  {step.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <div className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-4">
                  Let's Connect
                </div>
                <h2 className="font-serif text-5xl font-bold leading-tight">
                  Ready to Transform 
                  <span className="block text-amber-500 mt-2">Your Brand?</span>
                </h2>
              </div>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Partner with a team that brings 25+ years of advertising expertise and AI-forward thinking to every project. Let's create something extraordinary together.
              </p>

              <div className="space-y-4 pt-4">
                <a href="mailto:frank@frankzepeda.com" className="flex items-center gap-4 text-slate-300 hover:text-amber-500 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">frank@frankzepeda.com</span>
                </a>
                
                <a href="tel:+1234567890" className="flex items-center gap-4 text-slate-300 hover:text-amber-500 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg">(123) 456-7890</span>
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-amber-500 transition-colors group">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-800 p-8 border border-slate-700">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:border-amber-600 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:border-amber-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input 
                    type="text"
                    className="w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:border-amber-600 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-slate-900 border border-slate-700 px-4 py-3 text-white focus:border-amber-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-amber-600 text-white py-4 hover:bg-amber-500 transition-colors font-medium text-lg flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif text-2xl font-bold">
              <span className="text-white">Frank Zepeda</span>
              <span className="text-amber-600 ml-2">.</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm">© 2024 Zepeda Consulting Group. All rights reserved.</p>
              <p className="text-xs mt-2">25+ Years of Marketing Excellence</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        
        .font-sans {
          font-family: 'DM Sans', sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}