import type {Category} from "@/components/feature/Sidebar.tsx";
import {getCategoriesByPartID} from "@/service/categoryService.ts";

function getPartIdFromPath(path: string): number | null {
	if (path.startsWith('/common')) return 1;
	if (path.startsWith('/be')) return 2;
	if (path.startsWith('/fe')) return 3;
	if (path.startsWith('/an')) return 4;
	return null;
}

export async function getCategoriesForPathAsync(path: string): Promise<Category[]> {
	const partId = getPartIdFromPath(path);
	if (!partId) return [];

	try {
		const categories = await getCategoriesByPartID(partId);

		return categories.map((category: any) => ({
			id: category.id,
			name: category.name,
			// 아래는 추후 수정해야 함.
			path: category.path || `${path}/${category.id}`,
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
}

// 하위 호환성을 위한 동기 함수
export function getCategoriesForPath(_path: string): Category[] {
	return [];
}

