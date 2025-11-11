import { ReactNode } from 'react';
import Sidebar, { Category } from '../feature/Sidebar';

interface pageWithSidebarProps {
	children: ReactNode;
	categories: Category[];
}

export default function PageWithSidebar({ children, categories }: pageWithSidebarProps) {
	return (
		<div className="flex">
			<Sidebar categories={categories}/>
			<main className="flex-1 min-h-screen">
				{children}
			</main>
		</div>
	);
}