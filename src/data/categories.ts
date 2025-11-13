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

		// 현재 경로에서 part 부분만 추출 (예: /common/1 -> /common)
		const pathParts = path.split('/').filter(Boolean);
		const partPath = pathParts.length > 0 ? `/${pathParts[0]}` : path;

		return categories.map((category: any) => ({
			id: category.id,
			name: category.name,
			// part 경로에 category.id를 추가 (예: /common/1)
			path: category.path || `${partPath}/${category.id}`,
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

