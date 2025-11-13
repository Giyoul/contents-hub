import type { Category } from '../components/feature/Sidebar';
import { getPartIdByName } from "@/service/partService.ts";
import { getCategoriesByPartID } from "@/service/categoryService.ts";

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
		const partId = Array.isArray(partIdResult)
			? (partIdResult.length > 0 ? partIdResult[0].id : null)
			: (partIdResult?.id || partIdResult);
		
		if (!partId) {
			console.error('Part ID not found for:', partName, 'Result:', partIdResult);
			return [];
		}

		console.log('Found partId:', partId, 'for partName:', partName);
		const categories = await getCategoriesByPartID(partId);
		if (!categories || categories.length === 0) {
			console.log('No categories found for partId:', partId);
			return [];
		}

		return categories.map((category: any) => ({
			id: category.id,
			name: category.name,
			path: category.path || `${path}/${category.slug || category.id}`, // path가 없으면 생성
		}));
	} catch (error) {
		console.error('Error in getCategoriesForPathAsync:', error);
		return [];
	}
}

// 하위 호환성을 위한 동기 함수
export function getCategoriesForPath(_path: string): Category[] {
	return [];
}

