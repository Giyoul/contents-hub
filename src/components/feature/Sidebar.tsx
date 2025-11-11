import { Link, useLocation } from 'react-router-dom';
import * as path from "node:path";

export interface Category {
	id: string;
	name: string;
	path: string;
	subCategories?: Category[];
}

interface SidebarProps {
	categories: Category[];
}

export default function Sidebar({ categories }: SidebarProps) {
	const location = useLocation();

	const isActive = (path: string) => {
		return location.pathname === path || location.pathname.startsWith(`${path}/`);
	};

	return (
		<aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-16 overflow-y-auto">
			<nav className="p-4">
				<div className="space-y-1">
					{categories.map((category) => (
						<div key={category.id}>
							<Link
								to={category.path}
								className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
									isActive(category.path)
										? 'bg-blue-50 text-blue-600'
										: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
								}`}
							>
								{category.name}
							</Link>
							{category.subCategories && category.subCategories.length > 0 && (
								<div className="ml-4 mt-1 space-y-1">
									{category.subCategories.map((subCategory) => (
										<Link
											key={subCategory.id}
											to={subCategory.path}
											className={`block px-4 py-2 rounded-md text-sm transition-all duration-200 ${
												isActive(subCategory.path)
													? 'bg-blue-50 text-blue-600 font-medium'
													: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
											}`}
										>
											{subCategory.name}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</nav>
		</aside>
	);
}

