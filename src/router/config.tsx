
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

// lazy는 필요할때만 로드하도록
const HomePage = lazy(() => import('../pages/home/page'));
const DebatesPage = lazy(() => import('../pages/debates/page'));
const SharedPage = lazy(() => import('../pages/shared/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/debates',
    element: <DebatesPage />,
  },
  {
    path: '/shared',
    element: <SharedPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
