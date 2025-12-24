import Sidebar from "@/components/layout/sidebar/sidebar";
import React from "react";

export const App = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="max-w-[1400px] dark:bg-black bg-white min-h-screen flex">
			<Sidebar></Sidebar>
			{children}
		</main>
	);
};
