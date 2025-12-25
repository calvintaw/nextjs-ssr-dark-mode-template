"use client";
import { useState, useEffect, useEffectEvent } from "react";

export function useIsClient() {
	const [isClient, setIsClient] = useState(false);

	const checkClient = useEffectEvent(() => {
		setIsClient(true);
	});

	useEffect(() => {
		checkClient();
	}, []);

	return isClient;
}
