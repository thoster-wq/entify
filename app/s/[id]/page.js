"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function StepPage() {
	const params = useParams();
	const id = params.id;

	const [counter, setCounter] = useState(null);
	const [ready, setReady] = useState(false);
	const [count, setCount] = useState(1); // step counter

	// Initialize step from sessionStorage on client
	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedStep = parseInt(sessionStorage.getItem("redirectStep") || "1");
			setCount(storedStep);

			// Start countdown
			const randomTime = Math.floor(Math.random() * 7) + 4; // 4–10 seconds
			setCounter(randomTime);
		}
	}, []);

	// Countdown logic
	useEffect(() => {
		if (counter === null || counter === 0) {
			setReady(counter === 0);
			return;
		}

		const timer = setInterval(() => {
			setCounter((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [counter]);

	const handleClick = () => {
		if (typeof window !== "undefined") {
			let nextCount = count + 1;
			const redirectLinkMonetag = "https://otieu.com/4/10300009";
			const redirectLinkAdsterra = "https://prankhistorian.com/wr4vkqhe?key=ff9d760fb63882bfe2ed4f1137f1bf3b";
			const randomRedirect = Math.random() < 0.5 ? redirectLinkMonetag : redirectLinkAdsterra;

			// Update sessionStorage and state BEFORE redirect
			if (count < 4) {
				sessionStorage.setItem("redirectStep", nextCount);
				setCount(nextCount);
				window.open(window.location.href, "_blank");
				window.location.href = randomRedirect;
			} else {
				sessionStorage.setItem("redirectStep", 1);
				setCount(1);
				window.open(`https://t.me/entifyshare_bot?start=${id}`, "_blank");
				window.location.href = randomRedirect;
			}
		}
	};

	return (
		<>
		<Script
			src="//prankhistorian.com/db09ce4b32262d0cf923996047c6cc6f/invoke.js"
			async
			data-cfasync="false"
			strategy="beforeInteractive"
		/>
		<Script
			src="//prankhistorian.com/ea/f3/1e/eaf31ece634a338a6c015b119d670fe2.js"
			async
			strategy="beforeInteractive"
		/>
		<div className="w-full flex flex-col justify-center items-center text-center p-4 my-4">
			<div id="container-db09ce4b32262d0cf923996047c6cc6f"></div>

			{/* Heading */}
			<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3">
				{`Step ${count} / 4`}
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
		<div className="flex h-full w-ful justify-center items-center">
		  <iframe
			src="https://entify.vercel.app/"
			className="w-full border-0 h-[160vh] md:h-[360px]"
			style={{ border: 'none' }}
			allowFullScreen
			title="Embedded Content"
			scrolling="no"
		  />
		</div>

		</>
	);
}
