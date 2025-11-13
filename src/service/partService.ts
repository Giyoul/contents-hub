import { supabase } from "@/lib/supabase.ts";

export async function getPartIdByName(name: string): Promise<any> {
	const { data, error } = await supabase
		.from('part')
		.select('id')
		.eq('name', name)

	if (error) {
		console.error(error)
		return [];
	}

	return data || [];
}