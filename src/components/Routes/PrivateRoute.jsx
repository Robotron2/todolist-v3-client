/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"
import Spinner from "../Spinner"
import useAuth from "../CustomHooks/useAuth"

const PrivateRoute = () => {
	const [ok, setOk] = useState(false)
	const [auth, setAuth] = useAuth()

	useEffect(() => {
		const authCheck = async () => {
			let res = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/api/v1/auth/user-auth`)
			if (res.data.ok) {
				setOk(true)
			} else {
				setOk(false)
			}
		}
		if (auth?.token) {
			authCheck()
		}
	}, [auth?.token])

	return <>{ok ? <Outlet /> : <Spinner />}</>
}

export default PrivateRoute
