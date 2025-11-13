import {supabase} from "@/lib/supabase.ts";

export async function getCategoriesByPartID(partID: string): Promise<any[]> {
	const {data, error} = await supabase
		.from('category')
		.select('*')
		.eq('part_id', partID)

	if (error) {
		console.error(error);
		return [];
	}

	return data || [];
}