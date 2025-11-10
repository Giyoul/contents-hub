import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: '공통', href: '/common' },
    { name: 'BE', href: '/be' },
    { name: 'FE', href: '/fe' },
    { name: 'AN', href: '/an' }
  ];

	return (
		<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link to="/" className="flex items-center space-x-2">
							<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
								<i className="ri-discord-fill text-white text-lg"></i>
							</div>
							<span className="text-xl font-bold text-gray-900">ContentHub</span>
						</Link>
					</div>

					<nav className="hidden md:flex space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.href}
								className={`text-sm font-medium transition-colors duration-200 ${
									location.pathname === item.href
										? 'text-blue-600'
										: 'text-gray-600 hover:text-gray-900'
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>

					<div className="flex items-center">
						Made by 영기
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-600 hover:text-gray-900"
						>
							<i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
						</button>
					</div>
				</div>

				{isMenuOpen && (
					<div className="md:hidden py-4 border-t border-gray-200">
						<div className="flex flex-col space-y-3">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className="text-sm font-medium text-gray-600 hover:text-gray-900"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<div className="pt-3 border-t border-gray-200 space-y-2">
								<Button variant="outline" size="sm" className="w-full">
									Search
								</Button>
								<Button size="sm" className="w-full">
									Join Community
								</Button>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}