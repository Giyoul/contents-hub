import type {Category} from "@/components/feature/Sidebar.tsx";
import {getPartIdByName} from "@/service/partService.ts";
import {getCategoriesByPartID} from "@/service/categoryService.ts";

function getPartNameFromPath(path: string): string | null {
	if (path.startsWith('/common')) return 'common';
	if (path.startsWith('/fe')) return 'fe';
	if (path.startsWith('/be')) return 'be';
	if (path.startsWith('/an')) return 'an';
	return null;
}

export async function getCategoriesForPathAsync(path: string): Promise<Category[]> {
	const partName = getPartNameFromPath(path);
	if (!partName) return [];

	try {
		const partIdResult = await getPartIdByName(partName);
		// getPartIdByName이 배열을 반환하므로 처리
		const partId = Array.isArray(partIdResult)
			? (partIdResult.length > 0 ? partIdResult[0].id : null)
			: (partIdResult?.id || partIdResult);

		if (!partId) return [];

		const categories = await getCategoriesByPartID(partId);

		return categories.map((category: any) => ({
			id: category.id,
			name: category.name,
			// 아래는 추후 수정해야 함.
			path: category.path || `${path}/${category.slug || category.id}`,
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

