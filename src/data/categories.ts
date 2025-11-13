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



// 카테고리 데이터 구조
// 실제 데이터는 추후 Supabase나 JSON 파일에서 가져올 예정
export const categoryData: Record<string, Category[]> = {
	// 공통 카테고리
	common: [
		{
			id: 'common-1',
			name: '기본 설계',
			path: '/common/design',
			subCategories: [
				{ id: 'common-1-1', name: '시스템 설계', path: '/common/design/system' },
				{ id: 'common-1-2', name: '아키텍처 패턴', path: '/common/design/architecture' },
				{ id: 'common-1-3', name: 'API 설계', path: '/common/design/api' },
			],
		},
		{
			id: 'common-2',
			name: '검증',
			path: '/common/validation',
			subCategories: [
				{ id: 'common-2-1', name: '테스트 전략', path: '/common/validation/testing' },
				{ id: 'common-2-2', name: '코드 리뷰', path: '/common/validation/review' },
			],
		},
		{
			id: 'common-3',
			name: '성능 최적화',
			path: '/common/performance',
		},
		{
			id: 'common-4',
			name: '보안',
			path: '/common/security',
		},
	],

	// BE 카테고리
	be: [
		{
			id: 'be-1',
			name: '기본 설계',
			path: '/be/design',
			subCategories: [
				{ id: 'be-1-1', name: 'DB 설계', path: '/be/design/database' },
				{ id: 'be-1-2', name: '서버 아키텍처', path: '/be/design/server' },
			],
		},
		{
			id: 'be-2',
			name: '검증',
			path: '/be/validation',
		},
		{
			id: 'be-3',
			name: '인프라',
			path: '/be/infrastructure',
		},
	],

	// FE 카테고리
	fe: [
		{
			id: 'fe-1',
			name: '기본 설계',
			path: '/fe/design',
			subCategories: [
				{ id: 'fe-1-1', name: '컴포넌트 설계', path: '/fe/design/component' },
				{ id: 'fe-1-2', name: '상태 관리', path: '/fe/design/state' },
			],
		},
		{
			id: 'fe-2',
			name: '검증',
			path: '/fe/validation',
		},
		{
			id: 'fe-3',
			name: 'UI/UX',
			path: '/fe/uiux',
		},
	],

	// AN 카테고리
	an: [
		{
			id: 'an-1',
			name: '기본 설계',
			path: '/an/design',
		},
		{
			id: 'an-2',
			name: '검증',
			path: '/an/validation',
		},
		{
			id: 'an-3',
			name: '배포',
			path: '/an/deployment',
		},
	],
};

// 현재 경로에 맞는 카테고리 목록을 반환하는 함수
export function getCategoriesForPath(path: string): Category[] {
	if (path.startsWith('/common')) {
		return categoryData.common;
	} else if (path.startsWith('/be')) {
		return categoryData.be;
	} else if (path.startsWith('/fe')) {
		return categoryData.fe;
	} else if (path.startsWith('/an')) {
		return categoryData.an;
	}
	return [];
}

