"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useGSAP(() => {
		const clipAnimation = gsap.timeline({
			scrollTrigger: {
				trigger: "#clip",
				start: "center center",
				end: "+=800 center",
				scrub: 0.5,
				pin: true,
				pinSpacing: true,
			},
		});

		clipAnimation.to(".mask-clip-path", {
			width: "100vw",
			height: "100vh",
			borderRadius: 0,
		});
	});

	return (
		<div id="about" className="min-h-screen w-screen">
			<div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
				{/* 	<p className="font-general text-sm uppercase md:text-[10px]">
					Learn More
				</p> */}

				<AnimatedTitle
					title="Live Healthier"
					containerClass="mt-4 !text-black text-center w-full flex flex-wrap"
				/>

				<div className="about-subtext absolute bottom-[-85dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
					<p>FaceScape blends AI and emotion</p>
					<p className="text-gray-500">
						To create a unique, real-time interactive web experience. Using your
						webcam, it adapts visuals to your mood while teaching you how facial
						recognition and AI work together in tech.
					</p>
				</div>
			</div>

			<div className="h-dvh w-screen" id="clip">
				<div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
					<img
						src="/images/banner.jpg"
						alt="Background"
						className="absolute left-0 top-0 size-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
