import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import PageWithSidebar from '../../components/layout/PageWithSidebar';
import { getCategoriesForPath } from '../../data/categories';

interface SharedPost {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  preview: string;
  category: string;
  discordLink: string;
  originalContent: {
    type: 'article' | 'video' | 'tool' | 'image';
    url: string;
    title: string;
  };
  resources: {
    title: string;
    type: 'article' | 'video' | 'research' | 'tutorial';
    url: string;
    description: string;
  }[];
}

export default function SharedPage() {
  const location = useLocation();
  const categories = getCategoriesForPath(location.pathname);
  const [selectedPost, setSelectedPost] = useState<SharedPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const sharedPosts: SharedPost[] = [
    {
      id: '1',
      title: 'Amazing Data Visualization Tool',
      author: 'DataVizFan',
      timestamp: '2024-01-15 09:15',
      preview: 'Found this incredible tool for creating interactive data visualizations...',
      category: 'Tools',
      discordLink: 'https://discord.com/channels/123456789/987654321/444555666',
      originalContent: {
        type: 'tool',
        url: 'https://d3js.org',
        title: 'D3.js - Data Driven Documents'
      },
      resources: [
        {
          title: 'D3.js Complete Tutorial',
          type: 'tutorial',
          url: 'https://example.com/d3-tutorial',
          description: 'Step-by-step guide to mastering D3.js'
        },
        {
          title: 'Data Visualization Best Practices',
          type: 'article',
          url: 'https://example.com/dataviz-practices',
          description: 'Guidelines for effective data visualization'
        },
        {
          title: 'Interactive Charts with D3',
          type: 'video',
          url: 'https://youtube.com/watch?v=d3-example',
          description: 'Video series on building interactive charts'
        }
      ]
    },
    {
      id: '2',
      title: 'Fascinating Documentary on Ocean Life',
      author: 'NatureDoc',
      timestamp: '2024-01-14 20:30',
      preview: 'This documentary reveals incredible secrets of deep ocean ecosystems...',
      category: 'Videos',
      discordLink: 'https://discord.com/channels/123456789/987654321/555666777',
      originalContent: {
        type: 'video',
        url: 'https://youtube.com/watch?v=ocean-doc',
        title: 'Secrets of the Deep Ocean'
      },
      resources: [
        {
          title: 'Marine Biology Research Papers',
          type: 'research',
          url: 'https://example.com/marine-research',
          description: 'Latest scientific discoveries in marine biology'
        },
        {
          title: 'Ocean Conservation Guide',
          type: 'article',
          url: 'https://example.com/ocean-conservation',
          description: 'How to help protect ocean ecosystems'
        },
        {
          title: 'Deep Sea Exploration History',
          type: 'video',
          url: 'https://youtube.com/watch?v=deep-sea-history',
          description: 'Timeline of human deep sea exploration'
        }
      ]
    },
    {
      id: '3',
      title: 'Breakthrough in Quantum Computing',
      author: 'QuantumNews',
      timestamp: '2024-01-13 15:45',
      preview: 'Scientists achieve new milestone in quantum error correction...',
      category: 'Articles',
      discordLink: 'https://discord.com/channels/123456789/987654321/666777888',
      originalContent: {
        type: 'article',
        url: 'https://nature.com/quantum-breakthrough',
        title: 'Quantum Error Correction Milestone Achieved'
      },
      resources: [
        {
          title: 'Quantum Computing Explained',
          type: 'video',
          url: 'https://youtube.com/watch?v=quantum-explained',
          description: 'Simple explanation of quantum computing principles'
        },
        {
          title: 'Quantum Error Correction Theory',
          type: 'research',
          url: 'https://example.com/quantum-theory',
          description: 'Academic paper on quantum error correction methods'
        },
        {
          title: 'Future of Quantum Computing',
          type: 'article',
          url: 'https://example.com/quantum-future',
          description: 'Analysis of quantum computing\'s potential impact'
        }
      ]
    }
  ];

  const categories = ['Tools', 'Videos', 'Articles', 'Images'];

  const filteredPosts = sharedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'article': return 'ri-article-line';
      case 'video': return 'ri-video-line';
      case 'tool': return 'ri-tools-line';
      case 'image': return 'ri-image-line';
      default: return 'ri-link';
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'article': return 'ri-article-line';
      case 'video': return 'ri-video-line';
      case 'research': return 'ri-file-text-line';
      case 'tutorial': return 'ri-book-line';
      default: return 'ri-link';
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-600';
      case 'video': return 'bg-red-100 text-red-600';
      case 'research': return 'bg-green-100 text-green-600';
      case 'tutorial': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageWithSidebar categories={categories}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Shared Content</h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover content shared by the community with curated resources for deeper understanding
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search shared content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent pr-8"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  hover 
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedPost?.id === post.id ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center space-x-2 ml-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <i className="ri-discord-fill text-green-600 text-lg"></i>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.preview}
                  </p>
                  
                  {/* Original Content Preview */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                        <i className={`${getContentIcon(post.originalContent.type)} text-sm`}></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {post.originalContent.title}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {post.originalContent.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>By {post.author}</span>
                      <span>{post.timestamp}</span>
                    </div>
                    <span className="text-green-600 font-medium">
                      {post.resources.length} resources
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Selected Post Details */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {selectedPost ? (
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {selectedPost.title}
                  </h3>
                  
                  {/* Original Content */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Original Content</h4>
                    <a
                      href={selectedPost.originalContent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-3"
                    >
                      <i className={`${getContentIcon(selectedPost.originalContent.type)} mr-2`}></i>
                      View Original
                    </a>
                    
                    <a
                      href={selectedPost.discordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-2"
                    >
                      <i className="ri-discord-fill mr-2"></i>
                      Discord Post
                    </a>
                  </div>
                  
                  {/* Resources */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Related Resources ({selectedPost.resources.length})
                    </h4>
                    <div className="space-y-3">
                      {selectedPost.resources.map((resource, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-3">
                          <div className="flex items-start space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getResourceColor(resource.type)}`}>
                              <i className={`${getResourceIcon(resource.type)} text-sm`}></i>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-sm font-medium text-gray-900 mb-1">
                                {resource.title}
                              </h5>
                              <p className="text-xs text-gray-600 mb-2">
                                {resource.description}
                              </p>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-green-600 hover:text-green-700 font-medium"
                              >
                                Learn More →
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ) : (
                <Card>
                  <div className="text-center py-8">
                    <i className="ri-share-line text-4xl text-gray-300 mb-4"></i>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Select Shared Content
                    </h3>
                    <p className="text-gray-600">
                      Click on any shared item to view the original content and related resources
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
        </div>
      </PageWithSidebar>
      
      <Footer />
    </div>
  );
}