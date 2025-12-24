"use server";

import { ThemePreference } from "@/contexts/app-context";
import { cookies } from "next/headers";

export async function setThemePreferenceCookie(themePreference: ThemePreference) {
	const cookieStore = await cookies();
	cookieStore.set({
		name: "themePreference",
		value: themePreference,
		maxAge: 60 * 60 * 24 * 365,
	});
}
