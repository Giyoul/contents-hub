import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../../components/feature/Header';
import PageWithSidebar from '../../components/layout/PageWithSidebar';
import PostDetail from './components/PostDetail';

export interface DebatePost {
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
	debates: {
		title: string;
		url: string;
		description: string;
	}[];
}

export default function DebatesPage() {
	const location = useLocation();
	// categories prop을 전달하지 않으면 Sidebar가 자동으로 로드함
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
			],
			debates: [
				{
					title: "디스코드 토론하기 글 1 제목",
					url: "https://example.com",
					description: "디스코드 토론하기 글 1에 대한 설명"
				},
				{
					title: "디스코드 토론하기 글 1 제목222",
					url: "https://example.com",
					description: "디스코드 토론하기 글 1222에 대한 설명"
				}
			],

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
			],
			debates: [
				{
					title: "디스코드 토론하기 글 1 제목",
					url: "https://example.com",
					description: "디스코드 토론하기 글 1에 대한 설명"
				},
				{
					title: "디스코드 토론하기 글 1 제목222",
					url: "https://example.com",
					description: "디스코드 토론하기 글 1222에 대한 설명"
				}
			],
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
			],
			debates: [
				{
					title: "디스코드 토론하기 글 1 제목",
					url: "https://example.com",
					description: "디스코드 토론하기 글 1에 대한 설명"
				},
				{
					title: "디스코드 토론하기 글 1 제목222",
					url: "https://example.com",
					description: "디스코드 토론하기 글 1222에 대한 설명"
				}
			],
		}
	];

	const filteredPosts = debatePosts.filter(post => {
		const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.preview.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesTag = !selectedTag || post.tags.includes(selectedTag);
		return matchesSearch && matchesTag;
	});

	const handlePostClick = (post: DebatePost) => {
		setSelectedPost(post);
	};

	const handleBack = () => {
		setSelectedPost(null);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Header/>
			<PageWithSidebar>
				<div className="w-full pl-4 sm:pl-6 lg:pl-8 pr-8 py-8">
					{selectedPost ? (
						<PostDetail post={selectedPost} onBack={handleBack}/>
					) : (
						<div className="w-full">
							<div className="space-y-6">
								{filteredPosts.map((post) => (
									<div
										key={post.id}
										onClick={() => handlePostClick(post)}
										className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-6 cursor-pointer hover:border-blue-300"
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
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</PageWithSidebar>
		</div>
	);
}
