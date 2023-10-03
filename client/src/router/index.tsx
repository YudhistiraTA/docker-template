import { LandingPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/other',
		element: <div>hola</div>,
	},
])

export default router