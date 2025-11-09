
import { Link } from 'react-router-dom';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Discord%20community%20discussion%20and%20content%20sharing%20visualization%20with%20organized%20channels%2C%20modern%20digital%20communication%20platform%2C%20collaborative%20knowledge%20exchange%2C%20clean%20minimalist%20background%20with%20subtle%20tech%20elements%2C%20blue%20and%20purple%20gradient%20atmosphere&width=1200&height=800&seq=hero-discord&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Organize Your Discord
            <span className="text-blue-600 block">Content & Discussions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We collect and organize content from Discord's debate and share-with-others channels, 
            providing context and resources to help you understand each topic better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/debates">
              <Button size="lg" className="w-full sm:w-auto">
                <i className="ri-chat-4-line mr-2"></i>
                Browse Debates
              </Button>
            </Link>
            <Link to="/shared">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <i className="ri-share-line mr-2"></i>
                Explore Shared Content
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="ri-chat-4-line text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Debate Channel</h3>
              <p className="text-gray-600">
                Structured debates with background resources to understand complex topics
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <i className="ri-share-line text-green-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share-with-Others</h3>
              <p className="text-gray-600">
                Shared content with curated resources for deeper understanding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
