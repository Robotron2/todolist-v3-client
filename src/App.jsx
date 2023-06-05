import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import List from "./pages/User/List"
import PrivateRoute from "./components/Routes/PrivateRoute"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				<Route path="/auth/user" element={<PrivateRoute />}>
					<Route path="" element={<List />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
