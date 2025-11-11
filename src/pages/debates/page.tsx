
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import PageWithSidebar from '../../components/layout/PageWithSidebar';
import { getCategoriesForPath } from '../../data/categories';

interface DebatePost {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  preview: string;
  tags: string[];
  discordLink: string;
  resources: {
    title: string;
    type: 'article' | 'video' | 'research' | 'news';
    url: string;
    description: string;
  }[];
}

export default function DebatesPage() {
  const location = useLocation();
  const categories = getCategoriesForPath(location.pathname);
  const [selectedPost, setSelectedPost] = useState<DebatePost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const debatePosts: DebatePost[] = [
    {
      id: '1',
      title: 'Climate Change Policy Effectiveness',
      author: 'EcoDebater',
      timestamp: '2024-01-15 14:30',
      preview: 'Discussing the effectiveness of current climate policies and potential improvements...',
      tags: ['Climate', 'Policy', 'Environment'],
      discordLink: 'https://discord.com/channels/123456789/987654321/111222333',
      resources: [
        {
          title: 'IPCC Climate Report 2023',
          type: 'research',
          url: 'https://ipcc.ch/report/ar6/wg1/',
          description: 'Latest scientific assessment on climate change'
        },
        {
          title: 'Carbon Tax Analysis',
          type: 'article',
          url: 'https://example.com/carbon-tax',
          description: 'Economic analysis of carbon pricing mechanisms'
        },
        {
          title: 'Climate Policy Explained',
          type: 'video',
          url: 'https://youtube.com/watch?v=example',
          description: 'Educational video on climate policy frameworks'
        }
      ]
    },
    {
      id: '2',
      title: 'Universal Basic Income Debate',
      author: 'PolicyWonk',
      timestamp: '2024-01-14 16:45',
      preview: 'Examining the pros and cons of implementing UBI in developed nations...',
      tags: ['Economics', 'Policy', 'Social'],
      discordLink: 'https://discord.com/channels/123456789/987654321/222333444',
      resources: [
        {
          title: 'Finland UBI Experiment Results',
          type: 'research',
          url: 'https://example.com/finland-ubi',
          description: 'Comprehensive study results from Finland\'s UBI trial'
        },
        {
          title: 'UBI Economic Impact',
          type: 'article',
          url: 'https://example.com/ubi-economics',
          description: 'Analysis of UBI\'s potential economic effects'
        }
      ]
    },
    {
      id: '3',
      title: 'AI Ethics and Regulation',
      author: 'TechEthicist',
      timestamp: '2024-01-13 10:20',
      preview: 'Should AI development be regulated? Discussing ethical implications...',
      tags: ['Technology', 'Ethics', 'AI'],
      discordLink: 'https://discord.com/channels/123456789/987654321/333444555',
      resources: [
        {
          title: 'EU AI Act Overview',
          type: 'news',
          url: 'https://example.com/eu-ai-act',
          description: 'Latest updates on European AI regulation'
        },
        {
          title: 'AI Ethics Framework',
          type: 'research',
          url: 'https://example.com/ai-ethics',
          description: 'Academic framework for AI ethical considerations'
        },
        {
          title: 'AI Regulation Debate',
          type: 'video',
          url: 'https://youtube.com/watch?v=ai-debate',
          description: 'Panel discussion on AI regulation approaches'
        }
      ]
    }
  ];

  const allTags = Array.from(new Set(debatePosts.flatMap(post => post.tags)));

  const filteredPosts = debatePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'article': return 'ri-article-line';
      case 'video': return 'ri-video-line';
      case 'research': return 'ri-file-text-line';
      case 'news': return 'ri-newspaper-line';
      default: return 'ri-link';
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-600';
      case 'video': return 'bg-red-100 text-red-600';
      case 'research': return 'bg-green-100 text-green-600';
      case 'news': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const handlePostClick = (post: DebatePost) => {
    setSelectedPost(post);
  };

	return (
		<div className="min-h-screen bg-gray-50">
			<Header/>
			<PageWithSidebar categories={categories}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Posts List */}
					<div className="lg:col-span-2">
						<div className="space-y-6">
							{filteredPosts.map((post) => (
								<div
									key={post.id}
									onClick={() => handlePostClick(post)}
									className={`bg-white rounded-xl border shadow-sm hover:shadow-md transition-all duration-200 p-6 cursor-pointer ${
										selectedPost?.id === post.id
											? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200'
											: 'border-gray-200 hover:border-blue-300'
									}`}
								>
									<div className="flex items-start justify-between mb-3">
										<h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
											{post.title}
										</h3>
										<i className="ri-discord-fill text-blue-600 text-lg ml-2 flex-shrink-0"></i>
									</div>

									<p className="text-gray-600 mb-4 leading-relaxed">
										{post.preview}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{post.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
											>
                        {tag}
                      </span>
										))}
									</div>

									<div className="flex items-center justify-between text-sm text-gray-500">
										<div className="flex items-center space-x-4">
											<span>By {post.author}</span>
											<span>{post.timestamp}</span>
										</div>
										<span className="text-blue-600 font-medium">
                      {post.resources.length} resources
                    </span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Selected Post Details */}
					<div className="lg:col-span-1">
						<div className="lg:sticky lg:top-24">
							{selectedPost ? (
								<div className="bg-white rounded-xl border-2 border-blue-200 shadow-lg p-6">
									<div className="flex items-center justify-between mb-4">
										<h3 className="text-lg font-semibold text-gray-900">
											{selectedPost.title}
										</h3>
										<button
											onClick={() => setSelectedPost(null)}
											className="lg:hidden text-gray-400 hover:text-gray-600 w-6 h-6 flex items-center justify-center"
										>
											<i className="ri-close-line text-xl"></i>
										</button>
									</div>

									{/* Discord Link */}
									<div className="mb-6">
										<h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
											<i className="ri-discord-fill text-blue-600 mr-2"></i>
											Original Discussion
										</h4>
										<a
											href={selectedPost.discordLink}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
										>
											<i className="ri-external-link-line mr-2"></i>
											View on Discord
										</a>
									</div>

									{/* Resources */}
									<div>
										<h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
											<i className="ri-book-line text-green-600 mr-2"></i>
											Recommended Resources ({selectedPost.resources.length})
										</h4>
										<div className="space-y-3">
											{selectedPost.resources.map((resource, index) => (
												<div key={index}
													 className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors">
													<div className="flex items-start space-x-3">
														<div
															className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getResourceColor(resource.type)}`}>
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
																className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 font-medium"
															>
																Read More
																<i className="ri-arrow-right-line ml-1"></i>
															</a>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							) : (
								<div className="bg-white rounded-xl border-2 border-dashed border-gray-200 p-6">
									<div className="text-center py-8">
										<i className="ri-chat-4-line text-4xl text-gray-300 mb-4"></i>
										<h3 className="text-lg font-medium text-gray-900 mb-2">
											Select a Debate
										</h3>
										<p className="text-gray-600">
											Click on any debate to view the original Discord link and recommended
											resources
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				</div>
			</PageWithSidebar>
		</div>
	);
}
