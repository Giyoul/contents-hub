import {Link} from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function HeroSection() {
	return (
		<section className="relative min-h-[800px] flex items-center py-20 overflow-hidden">
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
						디스코드 '토론하기' 채널 글들을
						<span className="text-blue-600 block mt-4">쉽게 학습하고 이해하기!</span>
					</h1>

					<p className="text-xl md:text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
						디스코드의 '토론하기'와 '공유하기' 채널에서 올라온 글들을 모아 주제별로 분류하고
						<div></div>
						이해를 돕는 배경 지식과 학습 자료를 함께 제공합니다.
						<div></div>
						복잡했던 토론 흐름도, 이제 단계별로 쉽게 따라갈 수 있어요.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link to="/common">
							<Button size="lg" className="w-full sm:w-auto">
								<i className="ri-chat-4-line mr-2"></i>
								학습하기!
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
