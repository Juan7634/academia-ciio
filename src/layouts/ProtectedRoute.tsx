import React, { type ReactNode } from 'react';
import { Navigate } from 'react-router';
import { LoadingComponent } from '../components/LoadingComponent';

// import { useAuthStore } from '@/store/authStore';
// import { useWebSocket } from '@/hooks/useWebSocket';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	// const { isAuthenticated, isLoading } = useAuthStore();

	// useWebSocket();

	if (false) {
		return <LoadingComponent />;
	}

	if (!true) {
		return <Navigate to="/auth/login" replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
