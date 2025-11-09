
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import FeaturedContent from './components/FeaturedContent';
import CategoryOverview from './components/CategoryOverview';
import StatsSection from './components/StatsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
		{/*네비게이션*/}
      <Header />
      <main>
		{/*  메인 베너 */}
        <HeroSection />
		{/*  카테고리 소개 */}
        <CategoryOverview />
		{/*  추천 콘텐츠*/}
        <FeaturedContent />
		{/*  통계 */}
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
