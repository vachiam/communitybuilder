import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Users, FileText, Calendar, Settings, LogOut, Plus, Edit, Trash2, Eye, FileEdit, Upload } from 'lucide-react';
import { mockExperts, mockArticles, mockEvents } from '../data/mockData';
import { loadColors, saveColors } from '../lib/theme';
import config from '../../community.config';

export function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'experts' | 'articles' | 'events' | 'pages' | 'settings'>('overview');
  const [colors, setColors] = useState(loadColors);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  const stats = [
    { label: 'Total Experts', value: mockExperts.length, icon: Users },
    { label: 'Published Articles', value: mockArticles.length, icon: FileText },
    { label: 'Upcoming Events', value: mockEvents.length, icon: Calendar },
    { label: 'Total Views', value: '12.5K', icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Admin Panel</p>
          </div>

          <nav className="p-4 space-y-2 flex-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'overview'
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users size={20} />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('experts')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'experts'
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Users size={20} />
              <span>Experts</span>
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'articles'
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileText size={20} />
              <span>Articles</span>
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'events'
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Calendar size={20} />
              <span>Events</span>
            </button>
            <button
              onClick={() => setActiveTab('pages')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'pages'
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileEdit size={20} />
              <span>Pages</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings'
                  ? 'bg-gray-100 text-gray-900 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <Link
              to="/"
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors mb-2"
            >
              <Eye size={20} />
              <span>View Site</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <stat.icon className="text-gray-600" size={24} />
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
                    <div className="space-y-4">
                      {mockArticles.slice(0, 3).map((article) => (
                        <div key={article.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                          <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-16 h-16 rounded object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-sm line-clamp-1">{article.title}</h3>
                            <p className="text-xs text-gray-500 mt-1">By {article.author}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                      <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Plus size={20} />
                        <span>Add New Expert</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Plus size={20} />
                        <span>Create Article</span>
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        <Plus size={20} />
                        <span>Schedule Event</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experts Tab */}
            {activeTab === 'experts' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Manage Experts</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Plus size={20} />
                    Add Expert
                  </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Expert</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialty</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockExperts.map((expert) => (
                        <tr key={expert.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={expert.image} alt={expert.name} className="w-10 h-10 rounded-full object-cover" />
                              <div>
                                <p className="font-medium text-gray-900">{expert.name}</p>
                                <p className="text-sm text-gray-500">{expert.title}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{expert.specialty}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{expert.location}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                to={`/experts/${expert.id}`}
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                              >
                                <Eye size={18} />
                              </Link>
                              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                                <Edit size={18} />
                              </button>
                              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Articles Tab */}
            {activeTab === 'articles' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Manage Articles</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Plus size={20} />
                    Create Article
                  </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Article</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Published</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockArticles.map((article) => (
                        <tr key={article.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={article.featuredImage} alt={article.title} className="w-16 h-12 rounded object-cover" />
                              <p className="font-medium text-gray-900 line-clamp-2 max-w-md">{article.title}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {article.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{article.author}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {new Date(article.publishDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <Link
                                to={`/articles/${article.id}`}
                                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                              >
                                <Eye size={18} />
                              </Link>
                              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                                <Edit size={18} />
                              </button>
                              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Manage Events</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Plus size={20} />
                    Schedule Event
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {mockEvents.map((event) => (
                    <div key={event.id} className="bg-white rounded-lg border border-gray-200 p-6 flex gap-6">
                      <img src={event.image} alt={event.title} className="w-48 h-32 rounded object-cover" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span>{event.date}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                          <span>•</span>
                          <span>{event.location}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{event.description}</p>
                        <div className="flex items-center gap-2">
                          <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                            <Edit size={16} className="inline mr-2" />
                            Edit
                          </button>
                          <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                            <Trash2 size={16} className="inline mr-2" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pages Tab */}
            {activeTab === 'pages' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Manage Pages</h2>

                <div className="space-y-6">
                  {/* Homepage Section */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold mb-4">Homepage</h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Hero Section</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
                            <input
                              type="text"
                              defaultValue={config.tagline}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Hero Subtitle</label>
                            <textarea
                              defaultValue={config.description}
                              rows={3}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Primary CTA Text</label>
                            <input
                              type="text"
                              defaultValue="Find an Expert"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Secondary CTA Text</label>
                            <input
                              type="text"
                              defaultValue="Browse Articles"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-3">Mission Section</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mission Title</label>
                            <input
                              type="text"
                              defaultValue="Our Mission"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mission Description</label>
                            <textarea
                              defaultValue={config.mission}
                              rows={3}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="font-medium text-gray-900 mb-3">CTA Banner</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Banner Title</label>
                            <input
                              type="text"
                              defaultValue="Join Our Community Today"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Banner Description</label>
                            <textarea
                              defaultValue={config.description}
                              rows={2}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Banner Button Text</label>
                            <input
                              type="text"
                              defaultValue="Get Started"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 mt-6">
                      <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                        Save Homepage
                      </button>
                    </div>
                  </div>

                  {/* About Page Section */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold mb-4">About Page</h3>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Page Title</label>
                        <input
                          type="text"
                          defaultValue={`About ${config.name}`}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Page Subtitle</label>
                        <textarea
                          defaultValue={config.mission}
                          rows={2}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Our Story Heading</label>
                        <input
                          type="text"
                          defaultValue="Our Story"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Our Story Content</label>
                        <textarea
                          defaultValue={config.foundingStory}
                          rows={6}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">What We Offer Heading</label>
                        <input
                          type="text"
                          defaultValue="What We Offer"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 mt-6">
                      <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                        Save About Page
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Branding Settings</h2>

                <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Brand Identity</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                        <input
                          type="text"
                          defaultValue={config.shortName}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-xl">Logo</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 mb-2">Upload a new logo (recommended size: 200x200px)</p>
                              <label className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                <Upload size={18} />
                                <span className="text-sm">Choose File</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Favicon</label>
                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-blue-600 rounded"></div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 mb-2">Upload favicon (32x32px, .ico or .png)</p>
                              <label className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                <Upload size={18} />
                                <span className="text-sm">Choose File</span>
                                <input
                                  type="file"
                                  accept="image/x-icon,image/png"
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={colors.primary}
                            onChange={(e) => setColors(c => ({ ...c, primary: e.target.value }))}
                            className="w-16 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={colors.primary}
                            onChange={(e) => setColors(c => ({ ...c, primary: e.target.value }))}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={colors.secondary}
                            onChange={(e) => setColors(c => ({ ...c, secondary: e.target.value }))}
                            className="w-16 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={colors.secondary}
                            onChange={(e) => setColors(c => ({ ...c, secondary: e.target.value }))}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">Typography</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                        <option>Inter</option>
                        <option>Lato</option>
                        <option>Poppins</option>
                        <option>Roboto</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <button
                      onClick={() => saveColors(colors)}
                      className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
