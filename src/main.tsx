import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// React 18 방식으로 렌더링
createRoot(document.getElementById('root')!).render(
	// 개발 모드 검사 활성화
  <StrictMode>
	  {/*App 컴포넌트 렌더링*/}
    <App />
  </StrictMode>,
)
