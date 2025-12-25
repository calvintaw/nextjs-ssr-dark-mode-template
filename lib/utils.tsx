import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

/**
 * Combines multiple class names intelligently:
 * - conditional classes via `clsx`
 * - deduplicates Tailwind classes via `twMerge`
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(...inputs));
}

export function capitalizeFirstChar(value: string) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getAvatarFallBack(value: string) {
	const parts = value.trim().split(/\s+/);

	if (parts.length >= 2) {
		return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
	}

	const word = parts[0];
	return word.slice(0, 2).toUpperCase();
}
