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
