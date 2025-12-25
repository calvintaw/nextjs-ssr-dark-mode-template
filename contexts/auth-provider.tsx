"use client";

import { authClient } from "@/lib/auth/auth-client";
import { User } from "better-auth";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";

type AuthContextValue = {
	user: User | null;
	isUserPending: boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isUserPending, setIsUserPending] = useState(true);

	useEffect(() => {
		let mounted = true;

		async function getUser() {
			const { data, error } = await authClient.getSession();

			if (!mounted) {
				setIsUserPending(false);
				return;
			}

			if (error) {
				setUser(null);
				setIsUserPending(false);
				return;
			}

			setUser(data?.user ?? null);
			setIsUserPending(false);
		}

		getUser();

		return () => {
			mounted = false;
		};
	}, []);

	const value: AuthContextValue = {
		user,
		isUserPending,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook = safer + cleaner consumption
export function useAuthProvider(): AuthContextValue {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
}
