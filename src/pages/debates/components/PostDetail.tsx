import type {DebatePost} from '../page';

interface PostDetailProps {
	post: DebatePost;
	onBack: () => void;
}

export default function PostDetail({post, onBack}: PostDetailProps) {
	const getResourceIcon = (type: string) => {
		switch (type) {
			case 'article':
				return 'ri-article-line';
			case 'video':
				return 'ri-video-line';
			case 'research':
				return 'ri-file-text-line';
			case 'news':
				return 'ri-newspaper-line';
			default:
				return 'ri-link';
		}
	};

	const getResourceColor = (type: string) => {
		switch (type) {
			case 'article':
				return 'bg-blue-100 text-blue-600';
			case 'video':
				return 'bg-red-100 text-red-600';
			case 'research':
				return 'bg-green-100 text-green-600';
			case 'news':
				return 'bg-purple-100 text-purple-600';
			default:
				return 'bg-gray-100 text-gray-600';
		}
	};

	return (
		<div className="w-full h-full">
			{/* 뒤로가기 버튼 */}
			<div className="mb-6">
				<button
					onClick={onBack}
					className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
				>
					<i className="ri-arrow-left-line mr-2 text-xl"></i>
					<span className="text-sm font-medium">뒤로가기</span>
				</button>
			</div>

			{/* 제목 */}
			<div className="mb-6">
				<h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
			</div>

			{/* 세부 내용 */}
			<div className="mb-8">
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-4">상세 내용</h2>
					<p className="text-gray-700 leading-relaxed whitespace-pre-line">
						{post.preview}
					</p>
				</div>
			</div>

			{/* 공부하면 좋을 자료들 */}
			<div className="mb-8">
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
						<i className="ri-book-line text-blue-600 mr-2"></i>
						공부하면 좋을 자료들 ({post.resources.length})
					</h2>
					<div className="space-y-4">
						{post.resources.map((resource, index) => (
							<a
								key={index}
								href={resource.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
							>
								<div className="flex items-start space-x-4">
									<div
										className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${getResourceColor(resource.type)}`}>
										<i className={`${getResourceIcon(resource.type)} text-lg`}></i>
									</div>
									<div className="flex-1 min-w-0">
										<h3 className="text-base font-medium text-gray-900 mb-2">
											{resource.title}
										</h3>
										<p className="text-sm text-gray-600 mb-3">
											{resource.description}
										</p>
										<div className="inline-flex items-center text-sm text-blue-600 font-medium">
											자료 보기
											<i className="ri-external-link-line ml-1"></i>
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* 학습 후 참가할 수 있는 토론하기 글 링크 */}
			<div className="mb-8">
				<div className="bg-white rounded-xl border border-gray-200 p-6">
					<h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
						<i className="ri-book-line text-blue-600 mr-2"></i>
						학습 후 참가할 수 있는 토론하기 글 ({post.debates.length})
					</h2>
					<p className="text-gray-600 mb-4">
						위 자료들을 학습하신 후, 아래 Discord 토론에 참여해보세요!
					</p>
					<div className="space-y-4">
						{post.debates.map((debate, index) => (
							<a
								key={index}
								href={debate.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 cursor-pointer"
							>
								<div className="flex items-start space-x-4">
									<div
										className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
										<i className="ri-discord-fill text-xl"></i>
									</div>
									<div className="flex-1 min-w-0">
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											{debate.title}
										</h3>
										<p className="text-sm text-gray-600 mb-3">
											{debate.description}
										</p>
										<div className="inline-flex items-center text-sm text-blue-600 font-medium">
											토론 참여하기
											<i className="ri-external-link-line ml-1"></i>
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

