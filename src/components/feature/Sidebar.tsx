import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategoriesForPathAsync } from "@/data/categories.ts";

export interface Category {
	id: string;
	name: string;
	path: string;
	subCategories?: Category[];
}

interface SidebarProps {
	categories?: Category[];
}

export default function Sidebar({ categories: propCategories }: SidebarProps) {
	const location = useLocation();
	const [categories, setCategories] = useState<Category[]>(propCategories || []);
	const [loading, setLoading] = useState(!propCategories);

	useEffect(() => {
		// prop으로 category가 전달되지 않았을 때에만 API를 호출하는 것이다.
		if (!propCategories) {
			async function loadCategories() {
				setLoading(true);
				const data = await getCategoriesForPathAsync(location.pathname);
				setCategories(data);
				setLoading(false);
			}
			loadCategories();
		} else {
			setCategories(propCategories);
		}
	}, [location.pathname, propCategories]);

	const isActive = (path: string) => {
		return location.pathname === path || location.pathname.startsWith(`${path}/`);
	};

	if (loading) {
		return (
			<aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
				<nav className="p-4">
					<div className="text-gray-500 text-sm">로딩 중...</div>
				</nav>
			</aside>
		);
	}

	return (
		<aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
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
						</div>
					))}
				</div>
			</nav>
		</aside>
	);
}

