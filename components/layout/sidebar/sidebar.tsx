import { Button, SearchField } from "@heroui/react";
import ThemeSwitcher from "../../themeSwitcher";
import MenuList from "./menuList";
import UserAccountCard from "./userAccountCard";
import { ArrowRightFromSquare, Gear } from "@gravity-ui/icons";

const Sidebar = () => {
	return (
		<nav className="bg-background w-60 min-h-screen p-2 pb-10 flex flex-col gap-2 border-r border-r-separator">
			<UserAccountCard></UserAccountCard>

			<SearchField name="search">
				<SearchField.Group>
					<SearchField.SearchIcon />
					<SearchField.Input className="w-full" placeholder="Search notes..." />
					<SearchField.ClearButton />
				</SearchField.Group>
			</SearchField>

			<hr className="my-5 border-b border-b-separator" />

			<MenuList></MenuList>

			<div className="mt-auto flex items-center gap-2">
				<ThemeSwitcher></ThemeSwitcher>
				<Button isIconOnly variant="ghost">
					<Gear />
				</Button>
				<Button isIconOnly variant="ghost">
					<ArrowRightFromSquare />
				</Button>
			</div>
		</nav>
	);
};

export default Sidebar;
