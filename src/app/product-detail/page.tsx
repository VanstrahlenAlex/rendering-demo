import { Suspense } from "react";

import React from 'react'
import DashboardPage from "../dashboard/page";

export default function ProductDetail() {
	return (
		<div>
			<h1>Product Detail Page</h1>
			<Suspense fallback={<div>Loading...</div>}>
                <DashboardPage />
            </Suspense>
		</div>
	)
}
