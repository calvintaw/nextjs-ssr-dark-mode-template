import ThemeSwitcher from "@/components/themeSwitcher";
import React from "react";

export const App = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="px-4 max-w-[1400px] bg-background min-h-screen">
			<nav>
				<ThemeSwitcher></ThemeSwitcher>
			</nav>

			<section>{children}</section>
		</main>
	);
};
