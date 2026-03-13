import { createBrowserRouter } from "react-router-dom"

import App from "./App"
import NotFound from "./components/NotFound"

import Index from "./routes/Index"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
])

export default router
