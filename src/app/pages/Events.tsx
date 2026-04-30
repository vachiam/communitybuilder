import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { mockEvents } from '../data/mockData';

export function Events() {
  const getMonthDay = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate()
    };
  };

  return (
    <div>
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-xl text-gray-600">
            Join webinars, support groups, and educational workshops for the IBD community
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="text-gray-600" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="space-y-4">
            {mockEvents.map((event) => {
              const { month, day } = getMonthDay(event.date);

              return (
                <div
                  key={event.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Calendar Date Badge */}
                    <div className="flex-shrink-0 bg-gray-50 border-r border-gray-200 p-6 flex flex-col items-center justify-center md:w-32">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-600 mb-1">{month}</div>
                        <div className="text-4xl font-bold text-gray-900">{day}</div>
                      </div>
                    </div>

                    {/* Event Image */}
                    <div className="flex-shrink-0 md:w-64">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {event.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock size={18} />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={18} />
                          <span className="text-sm">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">{event.description}</p>

                      <div className="flex items-center gap-3">
                        <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                          Register Now
                        </button>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {mockEvents.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-600">Check back soon for new events and workshops</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Want to Host an Event?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us to educate and support the IBD community
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
