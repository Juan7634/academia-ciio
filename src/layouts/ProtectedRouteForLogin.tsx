import React, { type ReactNode } from 'react';
import { Navigate } from 'react-router';
import { LoadingComponent } from '../components/LoadingComponent';


interface ProtectedRouteForLoginProps {
	children: ReactNode;
}

const ProtectedRouteForLogin: React.FC<ProtectedRouteForLoginProps> = ({ children }) => {
	// const { isAuthenticated, isLoading } = useAuthStore();
	if (false) {
		return <LoadingComponent />;
	}

	if (false) {
		return <Navigate to="/app" replace />;
	}

	return <>{children}</>;
};

export default ProtectedRouteForLogin;
