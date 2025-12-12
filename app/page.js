"use client";

import Script from "next/script";

export default function Home() {
	return (
		<div className="w-full flex flex-col justify-center items-center text-center p-4 my-4">
			<Script
		        src="//prankhistorian.com/db09ce4b32262d0cf923996047c6cc6f/invoke.js"
		        async
		        data-cfasync="false"
		        strategy="beforeInteractive"
		    />
			<div id="container-db09ce4b32262d0cf923996047c6cc6f"></div>
		</div>
	);
}
