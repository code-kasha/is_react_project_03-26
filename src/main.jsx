import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"

import router from "./router"
import store from "./redux/store"

import "./index.css"

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
)
if ("serviceWorker" in navigator) {
	window.addEventListener("load", async () => {
		const existing = await navigator.serviceWorker.getRegistration()

		if (!existing) {
			navigator.serviceWorker.register("/sw.js")
		}
	})
}
