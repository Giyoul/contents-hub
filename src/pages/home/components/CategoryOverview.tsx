
import { Link } from 'react-router-dom';
import Card from '../../../components/base/Card';

export default function CategoryOverview() {
  const categories = [
    {
      title: 'Debate Channel',
      description: 'Structured debates from Discord with background resources to understand the topics',
      icon: 'ri-chat-4-line',
      color: 'bg-red-500',
      count: '1,200+ debates',
      href: '/debates',
      image: 'https://readdy.ai/api/search-image?query=Discord%20debate%20channel%20interface%20with%20structured%20arguments%20and%20discussion%20threads%2C%20modern%20chat%20interface%20design%2C%20organized%20conversation%20layout%2C%20clean%20digital%20communication%20aesthetic%2C%20blue%20and%20purple%20color%20scheme&width=400&height=250&seq=debate-discord&orientation=landscape'
    },
    {
      title: 'Share-with-Others Channel',
      description: 'Content shared on Discord with curated resources to provide context and deeper understanding',
      icon: 'ri-share-line',
      color: 'bg-green-500',
      count: '800+ shared items',
      href: '/shared',
      image: 'https://readdy.ai/api/search-image?query=Discord%20share%20channel%20with%20articles%20videos%20and%20resources%20being%20shared%2C%20content%20sharing%20interface%2C%20community%20knowledge%20exchange%2C%20organized%20digital%20content%20layout%2C%20green%20and%20blue%20color%20scheme&width=400&height=250&seq=share-discord&orientation=landscape'
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discord Content Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We organize content from Discord's debate and share-with-others channels, 
            providing context and resources to help you understand each topic better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Link key={index} to={category.href} className="group">
              <Card hover className="h-full transition-transform duration-200 group-hover:scale-105">
                <div className="relative mb-6">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                    <i className={`${category.icon} text-white text-xl`}></i>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {category.count}
                  </span>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium mr-1">Explore</span>
                    <i className="ri-arrow-right-line text-sm group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
