import { Category } from '../components/feature/Sidebar';
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
		const partId = await getPartIdByName(partName);
		if(!partId) return [];

		const categories = await getCategoriesByPartID(partId);

		return categories.map((category: any) => ({
			id: category.id,
			name: category.name
		}));
	} catch (error) {
		console.error(error);
		return [];
	}
}

