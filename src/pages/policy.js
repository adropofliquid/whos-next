import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<div className="w-full grid place-items-center">
				<div class="container mx-auto p-4">

					<h1 class="text-3xl font-bold mb-4">Privacy Policy</h1>

					<p class="mb-4">Last updated October 14, 2023</p>

					<p class="mb-8">This privacy notice for adropofliquid ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>" ), describes how and why we might collect, store, use, and/or share ("<strong>process</strong>") your information when you use our services ("<strong>Services</strong>"), such as when you:</p>

					<ul class="list-disc pl-8 mb-6">
						<li>Download and use our mobile application (tMusic), or any other application of ours that links to this privacy notice</li>
						<li>Engage with us in other related ways, including any sales, marketing, or events</li>
					</ul>

					<p class="mb-4"><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:adropofliquid@gmail.com" class="text-blue-500">adropofliquid@gmail.com</a>.</p>

					<div class="p-4 rounded mb-8">
						<h2 class="text-xl font-bold mb-4">Summary of Key Points</h2>
						<p class="mb-4"><em>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a href="#toc" class="text-blue-500">table of contents</a> below to find the section you are looking for.</em></p>
					</div>

					<h2 class="text-2xl font-bold mb-4">Table of Contents</h2>

					<ul class="list-disc pl-8 mb-8">
						<li><a href="#infocollect" class="text-blue-500">1. WHAT INFORMATION DO WE COLLECT?</a></li>
						<li><a href="#infouse" class="text-blue-500">2. HOW DO WE PROCESS YOUR INFORMATION?</a></li>
					</ul>


					<div class="p-4 rounded mt-8">
						<h2 class="text-xl font-bold mb-4">9. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
						<p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a <a href="https://app.termly.io/notify/912c1dff-2859-4b1d-b372-91fe7241d215" class="text-blue-500">data subject access request</a>.</p>
					</div>

				</div>


			</div>
		</main>
	);
}
