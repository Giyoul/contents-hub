import {ReactNode} from 'react';
import Sidebar, {Category} from '../feature/Sidebar';

interface pageWithSidebarProps {
	children: ReactNode;
	categories?: Category[];
	onCategoryClick?: () => void;
}

export default function PageWithSidebar({children, categories, onCategoryClick}: pageWithSidebarProps) {
	return (
		<div className="flex w-full">
			<Sidebar categories={categories} onCategoryClick={onCategoryClick}/>
			<main className="flex-1 min-w-0 min-h-screen">
				{children}
			</main>
		</div>
	);
}