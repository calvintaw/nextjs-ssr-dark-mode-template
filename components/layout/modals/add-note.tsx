"use client";

import { useState } from "react";
import { Modal, Button, Input, TextArea, TextField, Label } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";
import { Note } from "@/contexts/app-context";
import dayjs from "dayjs";

interface AddNoteModalProps {
	handleAddNote: (note: Note) => void;
}

export const AddNoteModal: React.FC<AddNoteModalProps> = ({ handleAddNote }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title.trim() || !content.trim()) return;

		handleAddNote({
			id: Date.now().toString(),
			title,
			content,
			createdAt: dayjs().format("MMM D, YYYY"),
			tags: [],
		});

		setTitle("");
		setContent("");
	};

	return (
		<Modal>
			{/* HeroUI Trigger */}
			<Button variant="tertiary" className="rounded-md mt-9">
				<Plus /> Add new Note
			</Button>

			<Modal.Backdrop>
				<Modal.Container placement="auto">
					<Modal.Dialog className="sm:max-w-md">
						<Modal.CloseTrigger />
						<Modal.Header>
							<Modal.Heading>Add New Note</Modal.Heading>
							<p className="mt-1.5 text-sm leading-5 text-muted">Fill out the form below to create a new note.</p>
						</Modal.Header>

						<Modal.Body className="p-4">
							<form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
								<TextField className="w-full" name="title">
									<Label>Title</Label>
									<Input
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										placeholder="Enter note title"
										required
									/>
								</TextField>

								<TextField className="w-full" name="content">
									<Label>Content</Label>
									<TextArea
										value={content}
										onChange={(e) => setContent(e.target.value)}
										placeholder="Enter note content"
										required
										rows={5}
									/>
								</TextField>

								<div className="flex justify-end gap-2 mt-2">
									<Button slot={"close"} variant="tertiary" onClick={close}>
										Cancel
									</Button>
									<Button slot={"close"} type="submit">
										Add Note
									</Button>
								</div>
							</form>
						</Modal.Body>
					</Modal.Dialog>
				</Modal.Container>
			</Modal.Backdrop>
		</Modal>
	);
};
