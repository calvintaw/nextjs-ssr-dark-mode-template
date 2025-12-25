"use client";
import { useAuthProvider } from "@/contexts/auth-provider";
import { authClient } from "@/lib/auth/auth-client";
import { useIsClient } from "@/lib/hooks/is-client";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Button, Skeleton } from "@heroui/react";

const LogoutIcon = () => {
	const { user } = useAuthProvider();
	const isClient = useIsClient();

	if (!isClient) return <Skeleton className="size-9 rounded-full"></Skeleton>;
	if (!user) return null;

	return (
		<Button
			isIconOnly
			variant="tertiary"
			onPress={async () => {
				await authClient.signOut();
				window.location.reload();
				console.log("refreshed");
			}}
		>
			<ArrowRightFromSquare />
		</Button>
	);
};

export default LogoutIcon;
