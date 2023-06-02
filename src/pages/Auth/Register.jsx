import { NavLink } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import SVG from "../../components/Layout/SVG"

const Register = () => {
	return (
		<>
			<Layout title={"Register || TodoApp"}>
				<div className="container login-container">
					<div className="content">
						<div className="text text-center">Register</div>
						<form action="/login" method="post">
							<div className="field">
								{/* <span className="bx bxs-envelope" /> */}
								<input type="email" placeholder="Email" name="useremail" required autoComplete="off" />
							</div>
							<div className="field">
								{/* <span className="bx bxs-lock-alt" /> */}
								<input type="password" placeholder="Password" name="password" required autoComplete="off" />
							</div>
							<div className="field">
								{/* <span className="bx bxs-lock-alt" /> */}
								<input type="text" placeholder="Enter your secret text" name="secret" required autoComplete="off" />
							</div>
							<div>
								<button type="submit" className="login-button btn btn-wine">
									Register
								</button>
								<button type="button" className="login-button btn btn-wine">
									<NavLink to={"/login"}>Login</NavLink>
								</button>
							</div>
						</form>
						<div>
							<NavLink to={"/forgot-password"}>Forget password</NavLink>
						</div>
					</div>
				</div>
				<SVG />
			</Layout>
		</>
	)
}

export default Register
