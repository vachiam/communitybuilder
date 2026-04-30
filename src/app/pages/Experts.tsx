import { Link } from 'react-router';
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { mockExperts } from '../data/mockData';
import { USMap } from '../components/USMap';

export function Experts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');

  const specialties = ['all', ...new Set(mockExperts.map(e => e.specialty))];

  const filteredExperts = mockExperts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expert.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expert.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || expert.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div>
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: search + filters */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Find an Expert</h1>
              <p className="text-lg text-gray-600 mb-8">
                Connect with board-certified specialists in inflammatory bowel disease care
              </p>
              <div className="bg-white rounded-xl shadow-sm px-4 py-3 mb-5 flex items-center gap-3">
                <Search className="text-gray-400 shrink-0" size={18} />
                <input
                  type="text"
                  placeholder="Search by name, specialty, or location..."
                  className="flex-1 text-sm text-gray-700 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSpecialty === specialty
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 mt-6">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-gray-200 inline-block" /> No experts
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-blue-200 inline-block" /> 1 expert
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-blue-600 inline-block" /> 2+ experts
                </span>
              </div>
            </div>

            {/* Right: map */}
            <div>
              <USMap experts={mockExperts} compact />
            </div>

          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredExperts.length} {filteredExperts.length === 1 ? 'expert' : 'experts'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts.map((expert) => (
              <Link
                key={expert.id}
                to={`/experts/${expert.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{expert.name}</h3>
                  <p className="text-gray-600 mb-2">{expert.title}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {expert.specialty}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin size={16} />
                      <span>{expert.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 line-clamp-3">{expert.bio}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredExperts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No experts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSpecialty('all');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
