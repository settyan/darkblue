import { type ReactNode } from "react";
import { AuthProvider } from "@/ui/components/AuthProvider";

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<main>
			<AuthProvider>{props.children}</AuthProvider>
		</main>
	);
}
