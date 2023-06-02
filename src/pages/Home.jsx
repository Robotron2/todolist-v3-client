import { NavLink } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import SVG from "./../components/Layout/SVG"

const Home = () => {
	return (
		<>
			<Layout>
				{/* <section className="hero">
					<div className="hero-header">
						<center>
							<h1 className="hero-title">Hey there, welcome to my Fullstack todolist app!</h1>
							<NavLink className=" button button-white" to={"/register"}>
								Sign Up
							</NavLink>
							<NavLink className=" button button-dark" to={"/login"}>
								Login
							</NavLink>
						</center>
					</div>
				</section> */}
				<div className="container text-white home">
					<div className="hero-title">
						<h1 className="hero-title text-center">Hey there, welcome to my Fullstack todolist app!</h1>
					</div>
					<div className="cta-btn text-center">
						<NavLink className="btn btn-wine" to={"/register"}>
							Sign Up
						</NavLink>
						<NavLink className="btn btn-wine" to={"/login"}>
							Login
						</NavLink>
					</div>
				</div>
				<SVG />
			</Layout>
		</>
	)
}

export default Home
