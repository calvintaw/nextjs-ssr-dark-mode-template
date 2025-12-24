"use client";

import { useAppProvider } from "@/contexts/app-context";
import { capitalizeFirstChar } from "@/lib/utils";
import { Plus } from "@gravity-ui/icons";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Button, Card } from "@heroui/react";
import { usePathname } from "next/navigation";

const Page = () => {
	const pathname = usePathname();
	console.log(pathname.split("/"));
	const { notes } = useAppProvider();

	return (
		<section className="px-4 flex-1 flex gap-4">
			<aside className="w-80 py-4">
				<h1 className="text-3xl font-bold">My Notes</h1>

				<Button variant="tertiary" className="rounded-md mt-9">
					<Plus />
					Add new Note
				</Button>

				<hr className="my-5" />

				<div className="flex flex-col gap-4">
					{notes.map((note) => (
						<Card key={note.id} className="w-80 rounded-2xl" variant="secondary">
							<Card.Header>
								<Card.Description>{note.createdAt}</Card.Description>
								<Card.Title className="font-bold text-xl">{note.title}</Card.Title>
							</Card.Header>
							<Card.Content>
								<p>{note.content}</p>
							</Card.Content>
						</Card>
					))}
				</div>
			</aside>

			<section className="py-4 border border-l border-l-separator pl-4 w-full">
				<Breadcrumbs size="lg">
					{pathname.split("/").map((path, idx) => {
						if (idx === 0) return null;
						const normalized = path === "" ? "My Notes" : capitalizeFirstChar(path);

						return <BreadcrumbItem key={idx}>{normalized}</BreadcrumbItem>;
					})}
				</Breadcrumbs>
			</section>
		</section>
	);
};

export default Page;
