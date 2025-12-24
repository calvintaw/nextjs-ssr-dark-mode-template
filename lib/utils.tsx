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

