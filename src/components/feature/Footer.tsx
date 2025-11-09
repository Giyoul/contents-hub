import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = {
    'Content': [
      { name: 'Debate Discussions', href: '/debates' },
      { name: 'Shared Content', href: '/shared' },
      { name: 'Popular Topics', href: '/topics' },
      { name: 'Recent Posts', href: '/recent' }
    ],
    'Resources': [
      { name: 'Blog Articles', href: '/blog' },
      { name: 'Video Library', href: '/videos' },
      { name: 'Discussion Guides', href: '/guides' },
      { name: 'Community Rules', href: '/rules' }
    ],
    'Community': [
      { name: 'Join Discord', href: '#' },
      { name: 'Contributors', href: '/contributors' },
      { name: 'Moderators', href: '/moderators' },
      { name: 'Support', href: '/support' }
    ]
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="ri-discord-fill text-white text-lg"></i>
              </div>
              <span className="text-xl font-bold">ContentHub</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Organizing and curating the best discussions from Discord debate and sharing channels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-discord-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Discord ContentHub. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-white text-sm transition-colors">
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}