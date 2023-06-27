"use client";

import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();

	const cancelSubscription = async () => {
		try {
			const res = await fetch("/api/stripe/subscription-cancel");
			const { subscription } = await res.json();
			console.log(subscription);
			router.push("/subscription");
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="p-5 border-2 mt-4 mx-3 text-center">
			<button
				className="p-2 text-white border mt-4"
				onClick={cancelSubscription}
			>
				Cancel Subscription
			</button>
		</div>
	);
}
