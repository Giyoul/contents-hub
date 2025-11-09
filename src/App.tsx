import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'


function App() {
  return (
	//   __BASE_PATH__는 Vite가 빌드할때 자동으로 치환하는 전역 변수
    <BrowserRouter basename={__BASE_PATH__}>
		{/*실제로 어느 페이지를 보여줄지 결정*/}
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App