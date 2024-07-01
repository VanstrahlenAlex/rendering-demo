import { cookies } from "next/headers";

export default function AboutPage() {
	const cookieStore = cookies();
	const theme = cookieStore.get("theme");
	return (
		<div>
			<h1>About Page {new Date().toLocaleTimeString()}</h1>
		</div>
	)
}
