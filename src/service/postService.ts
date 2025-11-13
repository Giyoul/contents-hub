import { supabase } from "@/lib/supabase.ts";

export async function getPostByCategoryId(categoryId: string): Promise<any> {
	const { data, error } = await supabase
		.from('post')
		.select('*')
		.eq('category_id', categoryId)

	if (error) {
		console.error(error)
		return [];
	}

	return data || [];
}

export async function getPostByID(postId: string): Promise<any> {
	const { data, error } = await supabase
		.from('post')
		.select('*, discussion (*), resource (*)')
		.eq('id', postId)
		.single()

	if (error) {
		console.error(error)
		return [];
	}

	return data || [];
}