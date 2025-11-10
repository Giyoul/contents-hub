
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';

export default function HomePage() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/*네비게이션*/}
			<Header/>
			<main>
				{/*  메인 베너 */}
				<HeroSection/>
			</main>
		</div>
	);
}
