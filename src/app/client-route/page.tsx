"use client";
import { serverSideFunction } from "@/utils/server-util";

export default function ClientRoutePage() {
	console.log("Client Route Rendered");
	
	const result = serverSideFunction();

	return (
		<>
			<h1>ClientRoutePage</h1>
			<p>{result}</p>
		</>
	)
}
