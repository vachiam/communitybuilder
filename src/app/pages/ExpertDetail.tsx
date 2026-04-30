import { useParams, Link, useNavigate } from 'react-router';
import { MapPin, Mail, ArrowLeft } from 'lucide-react';
import { mockExperts, mockArticles } from '../data/mockData';

export function ExpertDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const expert = mockExperts.find(e => e.id === id);

  if (!expert) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Expert Not Found</h1>
        <p className="text-gray-600 mb-8">The expert you're looking for doesn't exist.</p>
        <Link to="/experts" className="text-blue-600 hover:text-blue-700 font-medium">
          ← Back to Experts
        </Link>
      </div>
    );
  }

  const relatedArticles = mockArticles.filter(article =>
    article.author === expert.name ||
    expert.featuredContent?.includes(article.title)
  );

  return (
    <div>
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/experts')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Experts
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full aspect-square object-cover rounded-lg mb-6"
                />

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin size={20} className="text-gray-400" />
                      <span>{expert.location}</span>
                    </div>

                    {expert.email && (
                      <div className="flex items-center gap-3 text-gray-700">
                        <Mail size={20} className="text-gray-400" />
                        <a href={`mailto:${expert.email}`} className="text-blue-600 hover:text-blue-700">
                          {expert.email}
                        </a>
                      </div>
                    )}
                  </div>

                  <button className="w-full mt-6 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Request Appointment
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{expert.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{expert.title}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                  {expert.specialty}
                </span>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{expert.bio}</p>

                <h2 className="text-2xl font-semibold mb-4">Education & Experience</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Board-certified specialist with extensive training in {expert.specialty.toLowerCase()}.
                  Dedicated to providing comprehensive, patient-centered care with a focus on the latest
                  evidence-based treatments and personalized management strategies.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Inflammatory Bowel Disease Management</li>
                  <li>Crohn's Disease Treatment</li>
                  <li>Ulcerative Colitis Care</li>
                  <li>Biologic Therapy</li>
                  <li>Clinical Research</li>
                </ul>
              </div>

              {relatedArticles.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold mb-6">Featured Content</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/articles/${article.id}`}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <img
                          src={article.featuredImage}
                          alt={article.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              {article.category}
                            </span>
                            <span className="text-xs text-gray-500">{article.readTime}</span>
                          </div>
                          <h3 className="font-semibold line-clamp-2">{article.title}</h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
