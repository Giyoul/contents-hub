
import { useState } from 'react';
import Card from '../../../components/base/Card';

export default function FeaturedContent() {
  const [activeTab, setActiveTab] = useState('debates');
  
  const featuredDebates = [
    {
      title: 'The Future of Remote Work: Productivity vs. Work-Life Balance',
      author: 'TechDebater',
      replies: 47,
      likes: 156,
      timestamp: '2 hours ago',
      preview: 'Discord debate with supporting articles about remote work trends and psychological studies on work-life balance...',
      resources: ['Harvard Business Review article', 'Psychology Today study', 'MIT research paper']
    },
    {
      title: 'Climate Change Solutions: Individual vs. Corporate Responsibility',
      author: 'EcoWarrior',
      replies: 73,
      likes: 234,
      timestamp: '5 hours ago',
      preview: 'Heated Discord discussion with background resources on climate policy and environmental economics...',
      resources: ['IPCC report summary', 'Economic analysis', 'Policy comparison guide']
    },
    {
      title: 'AI in Education: Enhancement or Replacement?',
      author: 'EduFuturist',
      replies: 29,
      likes: 98,
      timestamp: '1 day ago',
      preview: 'Educational debate from Discord with supporting research on AI implementation in schools...',
      resources: ['Educational research', 'Case studies', 'Expert interviews']
    }
  ];
  
  const sharedContent = [
    {
      title: 'Fascinating Documentary: The Social Dilemma Explained',
      author: 'ContentCurator',
      type: 'Video',
      likes: 89,
      timestamp: '3 hours ago',
      preview: 'Shared Netflix documentary with analysis articles and expert commentary to understand the implications...',
      resources: ['Documentary analysis', 'Expert commentary', 'Related studies']
    },
    {
      title: 'Research Paper: The Psychology of Online Communities',
      author: 'ResearchShare',
      type: 'Article',
      likes: 67,
      timestamp: '6 hours ago',
      preview: 'Academic paper shared on Discord with simplified explanations and real-world applications...',
      resources: ['Simplified summary', 'Real-world examples', 'Follow-up studies']
    },
    {
      title: 'Interactive Tool: Bias Detection in News Articles',
      author: 'ToolFinder',
      type: 'Tool',
      likes: 124,
      timestamp: '1 day ago',
      preview: 'Useful tool shared with tutorials and guides on how to identify media bias effectively...',
      resources: ['Usage tutorial', 'Bias identification guide', 'Media literacy resources']
    }
  ];
  
  const tabs = [
    { id: 'debates', label: 'Debate Channel', icon: 'ri-chat-4-line' },
    { id: 'shared', label: 'Share-with-Others', icon: 'ri-share-line' }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Discord Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent discussions and shared content from Discord channels, organized with helpful context and resources.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {(activeTab === 'debates' ? featuredDebates : sharedContent).map((item, index) => (
            <Card key={index} hover className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {item.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{item.author}</div>
                    <div className="text-gray-500 text-xs">{item.timestamp}</div>
                  </div>
                </div>
                {activeTab === 'shared' && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {(item as any).type}
                  </span>
                )}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-snug">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.preview}
              </p>
              
              <div className="mb-4">
                <div className="text-xs font-medium text-gray-500 mb-2">Supporting Resources:</div>
                <div className="flex flex-wrap gap-1">
                  {(item as any).resources.map((resource: string, idx: number) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <i className="ri-heart-line"></i>
                    <span>{item.likes}</span>
                  </div>
                  {activeTab === 'debates' && (
                    <div className="flex items-center space-x-1">
                      <i className="ri-chat-3-line"></i>
                      <span>{(item as any).replies}</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
