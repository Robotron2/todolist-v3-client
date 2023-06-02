import Header from "./Header"
// import Footer from "./Footer"
import { Helmet } from "react-helmet"
import { Toaster } from "react-hot-toast"

// eslint-disable-next-line react/prop-types
const Layout = ({ children, title, description, keywords, author }) => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="author" content={author} />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" crossOrigin="anonymous" />

				<title>{title}</title>
			</Helmet>
			<Header />
			<Toaster />
			<main>{children}</main>
			{/* <main style={{ minHeight: "76vh" }}>{children}</main> */}
			{/* <Footer /> */}
		</div>
	)
}

Layout.defaultProps = {
	title: "Todo App",
	description: "Mern Stack Project",
	keywords: "mern, mongodb, node, react, todolist",
	author: "Theophilus"
}

export default Layout
