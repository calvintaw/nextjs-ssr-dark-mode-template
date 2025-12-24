"use client";
import { ButtonGroup, Button, cn } from "@heroui/react";
import { Sun, Moon, Display } from "@gravity-ui/icons";
import { ThemePreference, THEMES, useAppProvider } from "@/contexts/app-context";

const ThemeSwitcher = () => {
	const { themePreference, handleThemePreference } = useAppProvider();

	const THEME_ICONS: Record<ThemePreference, React.ReactNode> = {
		light: <Sun className="text-foreground" />,
		dark: <Moon className="text-foreground" />,
		system: <Display className="text-foreground" />,
	};

	return (
		<ButtonGroup className="border border-surface-quaternary rounded-full bg-surface p-1 w-fit" hideSeparator>
			{THEMES.map((theme) => (
				<Button
					key={theme}
					aria-label={`${theme}-mode`}
					size="sm"
					className={cn(
						"bg-transparent hover:bg-field-on-background-hover  rounded-full opacity-50",
						themePreference === theme && "opacity-100 bg-field-on-background-hover"
					)}
					isIconOnly
					onPress={() => handleThemePreference(theme)}
				>
					{THEME_ICONS[theme]}
				</Button>
			))}
		</ButtonGroup>
	);
};

export default ThemeSwitcher;
