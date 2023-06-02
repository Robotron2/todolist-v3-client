import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				{/* <Route>
                    <Route path="" element={}/>
                </Route> */}
			</Routes>
		</>
	)
}

export default App
