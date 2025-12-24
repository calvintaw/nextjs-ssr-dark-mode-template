"use client";
import { Pencil, ListCheck, Briefcase, Book, BookOpen } from "@gravity-ui/icons";
import { Card, cn } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

export const sections = [
	{ id: "notes", label: "My Notes", icon: Pencil, route: "/" },
	{ id: "todo", label: "To-Do List", icon: ListCheck, route: "/todo" },
	{ id: "projects", label: "Projects", icon: Briefcase, route: "/projects" },
	{ id: "journal", label: "Journal", icon: BookOpen, route: "/journal" },
	{ id: "reading", label: "Reading List", icon: Book, route: "/reading" },
];

const MenuList = () => {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<div className="flex flex-col gap-2">
			{sections.map(({ id, label, icon: Icon, route }) => {
				const isActive = pathname === route;

				return (
					<Card
						key={id}
						className={cn(
							"p-2 pl-4 cursor-pointer shadow-none transition-colors",
							isActive ? "bg-surface opacity-100" : "opacity-75 hover:opacity-100 hover:bg-surface/75 bg-transparent"
						)}
						onClick={() => router.push(route)}
					>
						<div className="flex items-center gap-2">
							<Icon />
							<span className="flex-1">{label}</span>
						</div>
					</Card>
				);
			})}
		</div>
	);
};

export default MenuList;
