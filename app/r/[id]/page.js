"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function RedirectPage() {
	const params = useParams();
	const id = params.id;

	const [counter, setCounter] = useState(null);
	const [ready, setReady] = useState(false);

	// Initialize countdown
	useEffect(() => {
		if (typeof window !== "undefined") {
			const randomTime = Math.floor(Math.random() * 5) + 4; // 4–8 sec
			setCounter(randomTime);
		}
	}, []);

	// Countdown logic
	useEffect(() => {
		if (counter === null || counter === 0) {
			setReady(counter === 0);
			handleClick();
			return;
		}

		const timer = setInterval(() => {
			setCounter((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [counter]);

	const handleClick = () => {
		if (typeof window !== "undefined") {
			window.open(`https://t.me/entifyshare_bot?start=${id}`, "_blank");
		}
	};

	return (
		<>
			<Script
				src="https://pl28223907.profitablecpmratenetwork.com/db09ce4b32262d0cf923996047c6cc6f/invoke.js"
				async
				data-cfasync="false"
				strategy="beforeInteractive"
			/>

			<div className="w-full flex flex-col justify-center items-center text-center p-4 my-4">
				<div id="container-db09ce4b32262d0cf923996047c6cc6f"></div>

				{/* Heading */}
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3">
					Please wait…
				</h2>

				{/* Subheading */}
				<p className="text-base sm:text-lg md:text-xl text-gray-800 mb-10">
					After the countdown finishes, click the Continue button.
				</p>

				{/* Counter OR Continue Button */}
				{!ready ? (
					<div className="text-5xl sm:text-6xl md:text-7xl font-bold text-blue-600">
						{counter}
					</div>
				) : (
					<button
						onClick={handleClick}
						className="px-10 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 text-lg sm:text-xl md:text-2xl font-medium rounded-xl bg-blue-600 text-white shadow-lg transition-colors hover:bg-blue-700"
					>
						Continue
					</button>
				)}
			</div>

			{/* Embedded Iframe */}
			<div className="flex h-full w-full justify-center items-center">
				<iframe
					src="https://entify.vercel.app/"
					className="w-full border-0 h-[160vh] md:h-[360px]"
					style={{ border: "none" }}
					allowFullScreen
					title="Embedded Content"
					scrolling="no"
				/>
			</div>
		</>
	);
}




