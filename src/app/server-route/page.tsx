import { serverSideFunction } from "@/utils/server-util";

export default function ServerRoutePage() {
	const result = serverSideFunction();
	return (
		<>
		<h1>ServerRoutePage</h1>
		<p>{result}</p>
		</>
	)
}
