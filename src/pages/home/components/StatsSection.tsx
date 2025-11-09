export default function StatsSection() {
  const stats = [
    {
      number: '2,847',
      label: 'Total Discussions',
      icon: 'ri-chat-4-line',
      color: 'text-blue-600'
    },
    {
      number: '15,234',
      label: 'Community Members',
      icon: 'ri-group-line',
      color: 'text-green-600'
    },
    {
      number: '1,456',
      label: 'Shared Resources',
      icon: 'ri-share-line',
      color: 'text-purple-600'
    },
    {
      number: '98%',
      label: 'User Satisfaction',
      icon: 'ri-thumb-up-line',
      color: 'text-orange-600'
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Community Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our platform is fostering meaningful discussions and knowledge sharing across the community.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${stat.color}`}>
                <i className={`${stat.icon} text-2xl`}></i>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Growing Community
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Be part of meaningful discussions, share valuable content, and help build a knowledge-rich community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              <i className="ri-discord-fill mr-2"></i>
              Join Discord Server
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors whitespace-nowrap">
              <i className="ri-notification-line mr-2"></i>
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}