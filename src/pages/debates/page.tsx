import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Header from '../../components/feature/Header';
import PageWithSidebar from '../../components/layout/PageWithSidebar';
import PostDetail from './components/PostDetail';
import {getPostByCategoryId, getPostByID} from "@/service/postService.ts";

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
	const [selectedPost, setSelectedPost] = useState<DebatePost | null>(null);
	const [debatePosts, setDebatePosts] = useState<DebatePost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// URL이 변경되면 detail page 닫기
		setSelectedPost(null);

		async function loadPosts() {
			try {
				setLoading(true);

				const pathParts = location.pathname.split('/').filter(Boolean);
				const categoryId = pathParts[pathParts.length - 1];

				// categoryId가 없거나 유효하지 않으면 빈 배열로 설정하고 로딩 종료
				if (!categoryId || isNaN(Number(categoryId))) {
					setDebatePosts([]);
					setLoading(false);
					return;
				}

				const posts = await getPostByCategoryId(Number(categoryId));

				const transformedPosts: DebatePost[] = posts.map((post: any) => ({
					id: String(post.id), // number를 string으로 변환
					title: post.title || '제목 없음',
					author: post.author || 'Unknown',
					timestamp: post.created_at || post.timestamp || new Date().toISOString(),
					preview: post.description || post.preview || post.content?.substring(0, 100) || '',
					tags: post.tags || [],
					discordLink: post.discord_link || post.discordLink || '',
					resources: post.resources || [],
					debates: post.debates || [],
				}));

				setDebatePosts(transformedPosts);
			} catch (err) {
				console.error(err);
				setDebatePosts([]);
			} finally {
				setLoading(false);
			}
		}

		loadPosts();
	}, [location.pathname]);


	const handlePostClick = async (post: DebatePost) => {
		try {
			setLoading(true);
			const postDetail = await getPostByID(Number(post.id));
			
			if (!postDetail) {
				setLoading(false);
				return;
			}

			const resources = Array.isArray(postDetail.resource) 
				? postDetail.resource 
				: (postDetail.resources || []);
			
			const discussions = Array.isArray(postDetail.discussion) 
				? postDetail.discussion 
				: (postDetail.discussions || []);

			const transformedPost: DebatePost = {
				id: String(postDetail.id),
				title: postDetail.title || post.title,
				author: postDetail.author || post.author,
				timestamp: postDetail.created_at || postDetail.timestamp || post.timestamp,
				preview: postDetail.description || postDetail.content || post.preview,
				tags: postDetail.tags || post.tags || [],
				discordLink: postDetail.discord_link || postDetail.discordLink || post.discordLink,
				resources: resources.map((res: any) => ({
					title: res.title || '',
					type: res.type || 'article',
					url: res.link || res.url || '',
					description: res.description || '',
				})),
				debates: discussions.map((debate: any) => ({
					title: debate.title || '',
					url: debate.link || debate.url || debate.discord_link || '',
					description: debate.description || '',
				})),
			};

			setSelectedPost(transformedPost);
		} catch (err) {
			setSelectedPost(post);
		} finally {
			setLoading(false);
		}
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
							{!loading && debatePosts.length === 0 ? (
								<div className="text-center py-12">
									<div className="text-gray-500 text-lg">카테고리를 선택해주세요</div>
								</div>
							) : (
								<div className="space-y-6">
									{debatePosts.map((post) => (
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
							)}
						</div>
					)}
				</div>
			</PageWithSidebar>
		</div>
	);
}
