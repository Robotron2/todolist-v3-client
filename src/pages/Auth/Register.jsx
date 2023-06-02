import { NavLink, useNavigate } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import SVG from "../../components/Layout/SVG"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"

const Register = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [answer, setAnswer] = useState("")
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/register`, { name, email, answer, password })
			if (res && res.data.success) {
				toast.success(res && res.data.message)
				navigate(`/login`)
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
			<Layout title={"Register || TodoApp"}>
				<div className="container login-container">
					<div className="content">
						<div className="text text-center">Register</div>
						<form action="/login" method="post" onSubmit={handleSubmit}>
							<div className="field">
								{/* <span className="bx bxs-envelope" /> */}
								<input
									type="text"
									placeholder="Username"
									name="username"
									required
									autoComplete="off"
									onChange={(e) => {
										setName(e.target.value)
									}}
									value={name}
								/>
							</div>
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
							<div className="field">
								{/* <span className="bx bxs-lock-alt" /> */}
								<input
									type="text"
									placeholder="Enter your secret text"
									name="secret"
									required
									autoComplete="off"
									onChange={(e) => {
										setAnswer(e.target.value)
									}}
									value={answer}
								/>
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
