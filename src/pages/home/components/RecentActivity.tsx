import Card from '../../../components/base/Card';

export default function RecentActivity() {
  const activities = [
    {
      type: 'debate',
      title: 'New debate started: "Universal Basic Income: Economic Solution or Utopian Dream?"',
      author: 'PolicyDebater',
      time: '15 minutes ago',
      icon: 'ri-chat-new-line',
      color: 'bg-red-100 text-red-600'
    },
    {
      type: 'share',
      title: 'Shared: "The Complete Guide to Critical Thinking" - Harvard Business Review',
      author: 'KnowledgeSeeker',
      time: '32 minutes ago',
      icon: 'ri-share-forward-line',
      color: 'bg-green-100 text-green-600'
    },
    {
      type: 'comment',
      title: 'Hot discussion in "AI Ethics in Healthcare" with 23 new responses',
      author: 'Multiple contributors',
      time: '1 hour ago',
      icon: 'ri-chat-3-line',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      type: 'resource',
      title: 'New resource added: "Effective Argumentation Techniques" video series',
      author: 'ModeratorTeam',
      time: '2 hours ago',
      icon: 'ri-video-add-line',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      type: 'share',
      title: 'Shared: Interactive tool for fact-checking news articles',
      author: 'FactChecker',
      time: '3 hours ago',
      icon: 'ri-tools-line',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      type: 'debate',
      title: 'Trending debate: "Social Media\'s Impact on Democratic Discourse"',
      author: 'SocialAnalyst',
      time: '4 hours ago',
      icon: 'ri-trending-up-line',
      color: 'bg-pink-100 text-pink-600'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Recent Activity
              </h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All Activity
                <i className="ri-arrow-right-line ml-1"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <Card key={index} className="p-4" hover>
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                      <i className={`${activity.icon} text-lg`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-medium mb-1 leading-snug">
                        {activity.title}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 space-x-3">
                        <span>by {activity.author}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                      <i className="ri-more-line"></i>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Trending Topics
            </h3>
            
            <Card className="mb-6">
              <div className="space-y-4">
                {[
                  { topic: 'AI Ethics', posts: 47, trend: '+12%' },
                  { topic: 'Climate Policy', posts: 34, trend: '+8%' },
                  { topic: 'Remote Work', posts: 29, trend: '+15%' },
                  { topic: 'Digital Privacy', posts: 23, trend: '+5%' },
                  { topic: 'Education Reform', posts: 18, trend: '+22%' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{item.topic}</div>
                      <div className="text-sm text-gray-500">{item.posts} discussions</div>
                    </div>
                    <div className="text-green-600 text-sm font-medium">
                      {item.trend}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="flex items-center">
                    <i className="ri-add-circle-line text-blue-600 mr-3"></i>
                    <span className="font-medium text-blue-900">Start New Debate</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                  <div className="flex items-center">
                    <i className="ri-share-line text-green-600 mr-3"></i>
                    <span className="font-medium text-green-900">Share Content</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="flex items-center">
                    <i className="ri-bookmark-line text-purple-600 mr-3"></i>
                    <span className="font-medium text-purple-900">Browse Resources</span>
                  </div>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}