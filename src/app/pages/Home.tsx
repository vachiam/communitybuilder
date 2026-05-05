import { Link } from 'react-router';
import { Search, ArrowRight, MapPin, Calendar, Users, BookOpen } from 'lucide-react';
import { mockExperts, mockArticles, mockEvents } from '../data/mockData';
import ctaBg from '../../imports/photo-1631557676757-fcc7b1160be8.avif';
import config from '../../community.config';

export function Home() {
  const featuredExperts = mockExperts.slice(0, 3);
  const featuredArticles = mockArticles.slice(0, 3);
  const upcomingEvents = mockEvents.slice(0, 2);

  return (
    <div>
      {/* Hero — split layout with scrolling cards */}
      <section className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">

            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                {config.name}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {config.tagline}
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                {config.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/experts"
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Find an Expert
                </Link>
                <Link
                  to="/articles"
                  className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  Browse Articles
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-3 flex items-center gap-3 max-w-md shadow-sm">
                <Search className="text-gray-400 ml-2 shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  className="flex-1 text-gray-700 outline-none text-sm"
                />
              </div>
            </div>

            {/* Right: two auto-scrolling card columns */}
            <div
              className="hidden lg:flex gap-4 h-[580px] overflow-hidden"
              style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)' }}
            >
              {/* Column 1: experts, scrolling up */}
              <div className="flex-1 overflow-hidden">
                <div style={{ animation: 'scroll-up 28s linear infinite' }} className="flex flex-col gap-4">
                  {[...mockExperts, ...mockExperts].map((expert, i) => (
                    <Link
                      key={`e-${expert.id}-${i}`}
                      to={`/experts/${expert.id}`}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow shrink-0"
                    >
                      <img src={expert.image} alt={expert.name} className="w-full h-36 object-cover" />
                      <div className="p-4">
                        <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                          {expert.specialty}
                        </span>
                        <h3 className="font-semibold text-gray-900 text-sm mt-2 mb-1">{expert.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <MapPin size={11} />
                          {expert.location}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 2: articles, scrolling down */}
              <div className="flex-1 overflow-hidden">
                <div style={{ animation: 'scroll-down 32s linear infinite' }} className="flex flex-col gap-4">
                  {[...mockArticles, ...mockArticles].map((article, i) => (
                    <Link
                      key={`a-${article.id}-${i}`}
                      to={`/articles/${article.id}`}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow shrink-0"
                    >
                      <img src={article.featuredImage} alt={article.title} className="w-full h-36 object-cover" />
                      <div className="p-4">
                        <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                          {article.category}
                        </span>
                        <h3 className="font-semibold text-gray-900 text-sm mt-2 mb-1 line-clamp-2">{article.title}</h3>
                        <p className="text-xs text-gray-500">{article.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-100">
            {[
              { value: '6+', label: 'Board-Certified Experts' },
              { value: '100%', label: 'Evidence-Based Content' },
              { value: '3+', label: 'Events This Month' },
            ].map(({ value, label }) => (
              <div key={label} className="py-10 text-center">
                <p className="text-4xl font-bold text-gray-900 mb-1">{value}</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission — split layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {config.mission}
              </h2>
              <Link to="/about" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200">
                Learn About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { icon: Users, title: 'Expert Network', desc: 'Connect with board-certified specialists across the country' },
                { icon: BookOpen, title: 'Trusted Resources', desc: 'Access evidence-based articles and educational content' },
                { icon: Calendar, title: 'Community Events', desc: 'Join webinars, support groups, and educational workshops' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition-colors">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Experts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Experts</h2>
            </div>
            <Link to="/experts" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-200">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredExperts.map((expert) => (
              <Link
                key={expert.id}
                to={`/experts/${expert.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <span className="text-xs font-medium text-white bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/30">
                      {expert.specialty}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-0.5">{expert.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{expert.title}</p>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{expert.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles — editorial layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Knowledge Base</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Articles</h2>
            </div>
            <Link to="/articles" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-200">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Featured article */}
            <Link
              to={`/articles/${featuredArticles[0].id}`}
              className="lg:col-span-3 group relative rounded-2xl overflow-hidden bg-gray-900 min-h-[380px] flex items-end"
            >
              <img
                src={featuredArticles[0].featuredImage}
                alt={featuredArticles[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative p-8">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-4 inline-block">
                  {featuredArticles[0].category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {featuredArticles[0].title}
                </h3>
                <p className="text-white/70 text-sm">By {featuredArticles[0].author} · {featuredArticles[0].readTime}</p>
              </div>
            </Link>
            {/* Smaller articles */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {featuredArticles.slice(1).map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.id}`}
                  className="group flex gap-4 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4"
                >
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-24 h-24 object-cover rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full mb-2 inline-block">
                      {article.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-xs text-gray-500">By {article.author} · {article.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Stay Connected</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => {
              const [, month, day] = event.date.split('-');
              const monthName = new Date(`2026-${month}-01`).toLocaleString('default', { month: 'short' });
              return (
                <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row">
                  <div className="relative sm:w-48 shrink-0">
                    <img src={event.image} alt={event.title} className="w-full h-48 sm:h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-md min-w-[52px]">
                      <p className="text-xs font-bold text-blue-600 uppercase">{monthName}</p>
                      <p className="text-2xl font-bold text-gray-900 leading-none">{day}</p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{event.time} · {event.location}</p>
                      <p className="text-gray-700 text-sm">{event.description}</p>
                    </div>
                    <button className="mt-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium self-start">
                      Register Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-blue-600 text-white py-24 overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join {config.shortName} Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {config.description}
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
