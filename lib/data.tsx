import { Note } from "@/contexts/app-context";
import dayjs from "dayjs";

export const notes: Note[] = [
	{
		id: "1",
		createdAt: dayjs().format("MMM D, YYYY"),
		title: "My First Note",
		content: `Hello World`,
		tags: [
			{ id: "1", color: "red", label: "First" },
			{ id: "2", color: "blue", label: "Second" },
		],
	},
	{
		id: "2",
		createdAt: dayjs().format("MMM D, YYYY"),
		title: "My First Note",
		content: `Hello World`,
		tags: [
			{ id: "1", color: "red", label: "First" },
			{ id: "2", color: "blue", label: "Second" },
		],
	},
];
