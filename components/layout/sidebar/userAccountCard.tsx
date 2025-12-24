"use client";
import { Card, Avatar, Button } from "@heroui/react";
import useToggle from "beautiful-react-hooks/useToggle";

const UserAccountCard = () => {
	const [open, toggleOpen] = useToggle();

	return (
		<Card>
			{false && (
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<Avatar></Avatar>
						<span>John Doe</span>
					</div>
					{/* <Button isIconOnly variant="tertiary" onPress={() => toggleOpen()}>
					<ChevronDown></ChevronDown>
				</Button> */}
				</div>
			)}

			{true && (
				<>
					<div className="flex justify-between gap-2">
						<Button variant="primary" size="sm" className="w-full">
							Sign Up
						</Button>
						<Button variant="tertiary" size="sm" className="w-full">
							Login
						</Button>
					</div>
					<Card.Description>Login to save your notes in the cloud.</Card.Description>
				</>
			)}

			{/* {open && (
				<Card.Footer className="justify-between">
					<Button size="sm" variant="primary">
						Log Out
					</Button>
					<Button size="sm" variant="tertiary">
						Change Account
					</Button>
				</Card.Footer>
			)} */}
		</Card>
	);
};

export default UserAccountCard;
