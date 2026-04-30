import { useParams, Link, useNavigate } from 'react-router';
import { Clock, Calendar, ArrowLeft, Tag } from 'lucide-react';
import { mockArticles, mockExperts } from '../data/mockData';

export function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/articles" className="text-blue-600 hover:text-blue-700 font-medium">
          ← Back to Articles
        </Link>
      </div>
    );
  }

  const authorExpert = mockExperts.find(e => e.name === article.author);
  const relatedArticles = mockArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div>
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/articles')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={20} />
            Back to Articles
          </button>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{article.readTime}</span>
            </div>
          </div>

          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">{article.excerpt}</p>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>{article.body}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Takeaways</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Understanding your condition is the first step toward effective management</li>
                <li>Working closely with healthcare providers ensures personalized treatment plans</li>
                <li>Lifestyle modifications can significantly impact symptom control</li>
                <li>Stay informed about new treatment options and research developments</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Next Steps</h2>
              <p>
                If you're experiencing symptoms or have questions about IBD management, consider
                consulting with one of our expert gastroenterologists. Early intervention and
                proper treatment can make a significant difference in your quality of life.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <Tag size={20} className="text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {authorExpert && (
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex gap-4">
                <img
                  src={authorExpert.image}
                  alt={authorExpert.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <Link
                    to={`/experts/${authorExpert.id}`}
                    className="text-xl font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {authorExpert.name}
                  </Link>
                  <p className="text-gray-600 mb-2">{authorExpert.title}</p>
                  <p className="text-gray-700 text-sm line-clamp-2">{authorExpert.bio}</p>
                </div>
              </div>
            </div>
          )}

          {relatedArticles.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/articles/${relatedArticle.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={relatedArticle.featuredImage}
                      alt={relatedArticle.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{relatedArticle.title}</h3>
                      <p className="text-sm text-gray-500">{relatedArticle.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
