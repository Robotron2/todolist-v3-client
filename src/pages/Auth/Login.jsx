import { NavLink, useLocation, useNavigate } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import SVG from "../../components/Layout/SVG"
import { useState } from "react"
import useAuth from "./../../components/CustomHooks/useAuth"
import axios from "axios"
import { toast } from "react-hot-toast"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate = useNavigate()
	const location = useLocation()
	const [auth, setAuth] = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/login`, { email, password })
			if (res && res.data.success) {
				toast.success(res && res.data.message)
				setAuth({
					...auth,
					user: res.data.user,
					token: res.data.token
				})
				localStorage.setItem("auth", JSON.stringify(res.data))
				navigate(location.state || `/auth/user`)
			} else {
				toast.error(res.data.message)
			}
		} catch (error) {
			console.log(error)
			toast.error("Something went wrong, please try again")
		}
	}

	return (
		<>
			<Layout title={"Login || TodoApp"}>
				<div className="container login-container">
					<div className="content">
						<div className="text text-center">Login</div>
						<form action="/login" method="post" onSubmit={handleSubmit}>
							<div className="field">
								{/* <span className="bx bxs-envelope" /> */}
								<input
									type="email"
									placeholder="Email"
									name="useremail"
									required
									autoComplete="off"
									onChange={(e) => {
										setEmail(e.target.value)
									}}
									value={email}
								/>
							</div>
							<div className="field">
								{/* <span className="bx bxs-lock-alt" /> */}
								<input
									type="password"
									placeholder="Password"
									name="password"
									required
									autoComplete="off"
									onChange={(e) => {
										setPassword(e.target.value)
									}}
									value={password}
								/>
							</div>
							<div>
								<button type="submit" className="login-button btn btn-wine">
									Login
								</button>
								<button type="button" className="login-button btn btn-wine">
									<NavLink to={"/register"}>Register</NavLink>
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

export default Login
