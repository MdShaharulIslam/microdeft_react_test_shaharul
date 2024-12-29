import { Navigate, useLocation } from "react-router-dom";

import { Spinner } from "@material-tailwind/react";

import { useContext } from "react";
import { AuthContext } from "../Component/Providers/AuthProvider";
const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	console.log(user);
	const location = useLocation();

	if (loading) {
		return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto" />;
	}

	if (user) {
		return children;
	}

	return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default PrivateRoute;
