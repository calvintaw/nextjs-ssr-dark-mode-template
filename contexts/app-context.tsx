"use client";

import { setThemePreferenceCookie } from "@/lib/actions";
import useMediaQuery from "beautiful-react-hooks/useMediaQuery";
import { createContext, useContext, ReactNode, useState } from "react";

export const THEMES = ["light", "dark", "system"] as const;
export type ThemePreference = (typeof THEMES)[number];
export type Theme = Exclude<ThemePreference, "system">;

type AppContextValue = {
	theme: Theme;
	themePreference: ThemePreference;
	handleThemePreference: (themePreference: ThemePreference) => void;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({
	children,
	initialThemePreference,
}: {
	children: ReactNode;
	initialThemePreference: ThemePreference;
}) {
	const [themePreference, setThemePreference] = useState<ThemePreference>(initialThemePreference);
	const systemPrefersDark = useMediaQuery("(prefers-color-scheme: dark)");
	const theme: Theme = themePreference === "system" ? (systemPrefersDark ? "dark" : "light") : themePreference;

	const handleThemePreference = async (themePreference: ThemePreference) => {
		setThemePreference(themePreference);
		const theme: Theme = themePreference === "system" ? (systemPrefersDark ? "dark" : "light") : themePreference;

		document.documentElement.setAttribute("data-theme", theme);
		await setThemePreferenceCookie(themePreference);
	};

	const value: AppContextValue = {
		theme,
		themePreference,
		handleThemePreference,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook = safer + cleaner consumption
export function useAppProvider(): AppContextValue {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
}
