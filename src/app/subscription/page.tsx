"use client";
import { signOut, useSession } from "next-auth/react";
import { subscription } from "../../../constants";
import { SubscriptionCard } from "../components/SubscriptionCard";

export default function Page() {
	const { data: session } = useSession();

	return (
		<div className="m-auto w-fit flex flex-col justify-center">
			<h1 className="text-2xl my-6">
				Signed in as {session?.user?.name}
			</h1>
			<div className="grid lg:grid-cols-3 gap-2">
				{subscription.map((sub, i) => (
					<SubscriptionCard
						key={i}
						planType={sub.planType}
						price={sub.price}
						priceId={sub.priceId}
					/>
				))}
			</div>
			<button
				className="p-2 text-white border mt-4"
				onClick={() => signOut()}
			>
				Sign Out
			</button>
		</div>
	);
}
