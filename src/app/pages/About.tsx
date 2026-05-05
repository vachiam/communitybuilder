import { Users, Target, Heart, Award, BookOpen, Lightbulb } from 'lucide-react';
import ctaBg from '../../imports/photo-1631557676757-fcc7b1160be8.avif';
import config from '../../community.config';

export function About() {
  return (
    <div>
      {/* Hero — cinematic split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="bg-blue-950 text-white flex items-center px-8 sm:px-12 lg:px-16 py-24">
          <div>
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-6">About Us</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              About {config.name}
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed max-w-md">
              {config.mission}
            </p>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
            alt="Healthcare professionals collaborating"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>
      </section>

      {/* Stats — dark strip */}
      <section className="bg-blue-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: '50+', label: 'Expert Specialists' },
              { value: '1000+', label: 'Articles Published' },
              { value: '200+', label: 'Events Hosted' },
              { value: '10K+', label: 'Community Members' },
            ].map(({ value, label }) => (
              <div key={label} className="py-12 px-6 text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{value}</p>
                <p className="text-blue-300 text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Built on a simple yet powerful mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {config.foundingStory}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since our inception, we've grown into a trusted network of healthcare professionals,
                researchers, and advocates dedicated to improving the lives of those living with IBD.
                Our platform serves thousands of patients, caregivers, and healthcare providers
                seeking reliable information and expert guidance.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&fit=crop"
                alt="Healthcare professionals"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <Award size={36} className="shrink-0" />
                  <div>
                    <p className="text-4xl font-bold leading-none mb-1">15+</p>
                    <p className="text-sm text-blue-200">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — numbered editorial */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">What We Stand For</p>
            <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              { num: '01', icon: Users, title: 'Community First', desc: 'We believe in the power of connection and shared experiences in managing chronic conditions.' },
              { num: '02', icon: Target, title: 'Evidence-Based', desc: 'All our content is reviewed by medical experts and grounded in current research.' },
              { num: '03', icon: Heart, title: 'Compassionate Care', desc: 'We understand the challenges of living with IBD and approach every interaction with empathy.' },
            ].map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="px-8 py-10 group">
                <p className="text-7xl font-bold text-gray-100 mb-6 group-hover:text-blue-100 transition-colors leading-none">{num}</p>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={22} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Research */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop"
                alt="Medical research and innovation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">Research & Innovation</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                At the forefront of IBD research
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                We stay at the forefront of IBD research and treatment advances. Our team continuously
                monitors the latest clinical trials, breakthrough therapies, and emerging best practices
                to bring you the most current information.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through partnerships with leading research institutions and medical centers, we ensure
                our community has access to cutting-edge knowledge and treatment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive resources designed to support you at every stage of your IBD journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: 'Expert Directory', desc: 'Connect with board-certified gastroenterologists, surgeons, dietitians, and other specialists experienced in IBD care across the country.' },
              { icon: BookOpen, title: 'Educational Resources', desc: 'Access a comprehensive library of articles, guides, and resources covering all aspects of IBD management, from diagnosis to treatment options.' },
              { icon: Target, title: 'Community Events', desc: 'Participate in webinars, support groups, and educational workshops led by healthcare professionals and patient advocates.' },
              { icon: Lightbulb, title: 'Latest Research', desc: 'Stay informed about breakthrough treatments, clinical trials, and advances in IBD care through our regularly updated content.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={22} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-blue-600 text-white py-24 overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Whether you're newly diagnosed, a long-time patient, a caregiver, or a healthcare
            professional, you're welcome here.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
