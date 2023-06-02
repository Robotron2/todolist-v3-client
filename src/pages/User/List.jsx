import Layout from "../../components/Layout/Layout"
import SVG from "./../../components/Layout/SVG"

const List = () => {
	return (
		<>
			<Layout>
				<div className="container mt-4 mb-4 header-text text-center">
					<h4>Hello List</h4>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="card card-white">
								<div className="card-body">
									<form action="/users/<%= userId %>" method="post">
										<div className="d-flex p-0">
											<input type="text" className="form-control add-task " placeholder="New Task..." name="newItem" required autoComplete="off" />
											<button type="submit" name="list" value="<%= listTitle %>" className="btn purple-btn ">
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
