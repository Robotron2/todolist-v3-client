import axios from "axios"
import Layout from "../../components/Layout/Layout"
import SVG from "./../../components/Layout/SVG"
import { useState } from "react"
import { toast } from "react-hot-toast"

const List = () => {
	const userDetails = JSON.parse(localStorage.getItem("auth"))
	const userProfile = userDetails.user
	const userName = userProfile.name
	const userId = userProfile._id
	const [newItem, setNewItem] = useState("")

	// {_id: '647a31d8193e642bd8ce91e6', name: 'user', email: 'user@user.com'}

	// const [name, setName] = useState("")
	// const [email, setEmail] = useState("")
	// const [address, setAddress] = useState("")
	// const [phone, setPhone] = useState("")
	// const [password, setPassword] = useState("")
	// const [answer, setAnswer] = useState("")
	// const navigate = useNavigate()
	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	try {
	// 		const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/register`, { name, email, address, phone, answer, password })
	// 		if (res && res.data.success) {
	// 			toast.success(res && res.data.message)
	// 			navigate(`/login`)
	// 		} else {
	// toast.error(res.data.message)
	// 		}
	// 	} catch (error) {
	// 		console.log(error)
	// 		toast.error("Something went wrong, please try again")
	// 	}
	// }

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/api/v1/user/list`, { newItem, userId })
			console.log(res)
			if (res && res.data) {
				toast.success("list updated!")
			} else {
				toast.error(res.data.message)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Layout>
				<div className="container mt-4 mb-4 header-text text-center">
					<h4>{userName}&apos;s list</h4>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="card card-white">
								<div className="card-body">
									<form action="/users/<%= userId %>" method="post" onSubmit={handleSubmit}>
										<div className="d-flex p-0">
											<input
												type="text"
												className="form-control add-task "
												placeholder="New Task..."
												required
												autoComplete="off"
												onChange={(e) => {
													setNewItem(e.target.value)
												}}
												value={newItem}
											/>

											<button type="submit" name="list" className="btn purple-btn ">
												<i className="bx bx-plus-medical" style={{ color: "purple" }}></i>
											</button>
										</div>
									</form>

									<div className="todo-list">
										<form action="/delete" method="post">
											<div className="checker">
												<span className="col-lg-6 col-md-3 col-sm-2">
													<input type="checkbox" name="checkbox" />
													<input type="hidden" name="userId" />
												</span>
											</div>
											<span>Hello</span>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SVG />
			</Layout>
		</>
	)
}

export default List
