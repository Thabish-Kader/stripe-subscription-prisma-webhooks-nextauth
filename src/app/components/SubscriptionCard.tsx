"use client";
import getStripe from "../utils/getStripe";

export const SubscriptionCard = ({
	planType,
	price,
	priceId,
}: {
	planType: string;
	price: string;
	priceId: string;
}) => {
	const handleCreateCheckoutSession = async (productId: string) => {
		const res = await fetch("/api/stripe/checkout-session", {
			method: "POST",
			body: JSON.stringify(productId),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const checkoutSession = await res.json().then((value) => {
			return value.session;
		});
		const stripe = await getStripe();
		const { error } = await stripe!.redirectToCheckout({
			sessionId: checkoutSession.id,
		});
	};
	return (
		<div
			onClick={() => handleCreateCheckoutSession(priceId)}
			className={`p-10 border-2 hover:cursor-pointer hover:bg-gray-700 hover:scale-105 duration-300  transition-all w-full max-w-[21rem] min-h-[22rem] bg-black`}
		>
			<div className="font-bold text-3xl mb-2 capitalize">{planType}</div>
			<div className="flex items-baseline mb-2">
				<div className="text-3xl mr-2">{price}</div> / Month
			</div>
			<ul className="list-disc pl-4 ">
				<li>Appointment scheduling</li>
				<li>Patient notification</li>
				<li>Create up to one office</li>
				<li>Description ...</li>
				<li>Description ....</li>
			</ul>
		</div>
	);
};
