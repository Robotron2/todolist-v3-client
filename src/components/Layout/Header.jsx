import { NavLink } from "react-router-dom"
const Header = () => {
	return (
		<>
			<div className="container">
				<nav className="navbar navbar-expand-lg  navbar-light">
					<NavLink className="navbar-brand " to={"/"}>
						<h2>RoboTodoApp</h2>
					</NavLink>
				</nav>
			</div>
		</>
	)
}

export default Header
