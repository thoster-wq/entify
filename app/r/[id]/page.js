"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RedirectPage() {
	const params = useParams();
	const id = params.id;

	const [counter, setCounter] = useState(null);
	const [ready, setReady] = useState(false);

	// Initialize countdown
	useEffect(() => {
		if (typeof window !== "undefined") {
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
			window.location.href = `https://t.me/entifyshare_bot?start=${id}`;
		}
	};

	return (
		<div
			style={{
				height: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				textAlign: "center",
				padding: "20px",
			}}
		>
			<h2
				style={{
					fontSize: "32px",
					fontWeight: "bold",
					color: "#0070f3",
					marginBottom: "12px",
				}}
			>
				Please wait…
			</h2>

			<p
				style={{
					fontSize: "20px",
					color: "#333",
					marginBottom: "40px",
				}}
			>
				After the countdown finishes, click the Continue button.
			</p>

			{/* Counter OR Continue Button */}
			{!ready ? (
				<div
					style={{
						fontSize: "55px",
						fontWeight: "bold",
						color: "#0070f3",
					}}
				>
					{counter}
				</div>
			) : (
				<button
					onClick={handleClick}
					style={{
						padding: "16px 40px",
						fontSize: "20px",
						border: "none",
						borderRadius: "12px",
						backgroundColor: "#0070f3",
						color: "white",
						cursor: "pointer",
						transition: "0.3s",
						boxShadow: "0 4px 14px rgba(0, 112, 243, 0.3)",
					}}
					onMouseEnter={(e) => (e.target.style.backgroundColor = "#0057c2")}
					onMouseLeave={(e) => (e.target.style.backgroundColor = "#0070f3")}
				>
					Continue
				</button>
			)}
		</div>
	);
}
