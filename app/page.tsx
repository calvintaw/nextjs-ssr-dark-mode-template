"use client";

import { AddNoteModal } from "@/components/layout/modals/add-note";
import { useAppProvider } from "@/contexts/app-context";
import { capitalizeFirstChar } from "@/lib/utils";
import { Plus } from "@gravity-ui/icons";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { Button, Card, ScrollShadow } from "@heroui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Page = () => {
	const pathname = usePathname();
	const { notes, handleAddNote } = useAppProvider();

	return (
		<section className="px-4 flex-1 flex max-h-screen">
			<ScrollShadow className="w-90 py-4 pr-4 overflow-y-auto shrink-0">
				<aside>
					<h1 className="text-3xl font-bold">My Notes</h1>

			
					<AddNoteModal handleAddNote={handleAddNote} />

					<hr className="my-5" />

					<div className="flex flex-col gap-4">
						{notes.map((note) => (
							<Card key={note.id} className="w-full rounded-2xl hover:bg-surface-hover transition-colors">
								<Card.Header>
									<Card.Description>{note.createdAt}</Card.Description>
									<Card.Title className="font-bold text-xl">{note.title}</Card.Title>
								</Card.Header>
								<Card.Content>
									<p className="line-clamp-3 text-muted">{note.content}</p>
								</Card.Content>
							</Card>
						))}
					</div>
				</aside>
			</ScrollShadow>

			<section className="py-4 border border-l border-l-separator pl-4 flex-1">
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
