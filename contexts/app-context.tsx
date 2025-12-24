"use client";

import { setThemePreferenceCookie } from "@/lib/actions";
import useMediaQuery from "beautiful-react-hooks/useMediaQuery";
import { createContext, useContext, ReactNode, useState } from "react";

export const THEMES = ["light", "dark", "system"] as const;
export type ThemePreference = (typeof THEMES)[number];
export type Theme = Exclude<ThemePreference, "system">;

export type Tag = {
	id: string;
	color: string;
	label: string;
};
export type Note = {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	tags: Tag[];
};

type AppContextValue = {
	theme: Theme;
	themePreference: ThemePreference;
	handleThemePreference: (themePreference: ThemePreference) => void;
	notes: Note[];
};



const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({
	children,
	initialThemePreference,
	initialData = [],
}: {
	children: ReactNode;
	initialThemePreference: ThemePreference;
	initialData: Note[];
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

	const [notes, setNotes] = useState<Note[]>(initialData);

	const value: AppContextValue = {
		theme,
		themePreference,
		handleThemePreference,
		notes,
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
