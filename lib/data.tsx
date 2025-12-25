import { Note } from "@/contexts/app-context";
import dayjs from "dayjs";

export const notes: Note[] = Array.from({ length: 1 }, (_, i) => {
	const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  ${i + 1} Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
  Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.`;

	return {
		id: (i + 1).toString(),
		createdAt: dayjs().format("MMM D, YYYY"),
		title: `Note ${i + 1}`,
		content: content.slice(0, Math.floor(100 + Math.random() * 100)), // 100-200 chars
		tags: [],
	};
});
