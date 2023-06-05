import { NavLink } from "react-router-dom"
import useAuth from "../CustomHooks/useAuth"
import { toast } from "react-hot-toast"
const Header = () => {
	const [auth, setAuth] = useAuth()

	const handleLogout = () => {
		setAuth({
			...auth,
			user: null,
			token: ""
		})
		localStorage.removeItem("auth")
		toast.success("Logout successfully! ")
	}

	return (
		<>
			<div className="container">
				{/* <nav className="navbar navbar-expand-lg  navbar-light">
					<NavLink className="navbar-brand " to={"/"}>
						<h2>RoboTodoApp</h2>
					</NavLink>
				</nav> */}

				<nav className="navbar navbar-expand-lg  navbar-light">
					<NavLink className="navbar-brand " to={"/"}>
						<h2>RoboTodoApp</h2>
					</NavLink>
					<button
						className="navbar-toggler "
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon " />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
							{!auth.user ? (
								<>
									<li className="nav-item">
										<NavLink className="nav-link" to="/register">
											Register
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/login">
											Login
										</NavLink>
									</li>
								</>
							) : (
								<>
									<li className="nav-item ">
										<NavLink onClick={handleLogout} className="nav-link text-white" to={"/"}>
											Logout
										</NavLink>
									</li>
								</>
							)}

							{/* <li className="nav-item ">
								<NavLink className="nav-link text-white" href="#">
									Link
								</NavLink>
							</li> */}
						</ul>
					</div>
				</nav>
			</div>
		</>
	)
}

export default Header
