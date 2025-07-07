import React from "react";
import Button from "../Button";
import Pharagraph from "./Word";
import About from "./About";

const LandingPage = () => {
	return (
		<div>
			<div className="w-[95vw] lg:w-[90vw] mx-auto">
				<div className="min-h-screen flex flex-col items-center justify-center">
					<div className="translate-y-[-3%]">
						<div className="flex justify-center items-center w-full">
							<h1 className="lilita-one text-[3rem] lg:text-[4rem] xl:text-[6rem]">
								MealHopper
							</h1>
							<a
								href="/account"
								className="ml-auto mr-4 flex gap-4 items-center justify-center text-[1.25rem]"
							>
								Account
								<img
									src="/images/happy_frog.jpg"
									className="w-[4rem] h-[4rem]"
									alt=""
								/>
							</a>
						</div>
						<p className="text-[1.75rem] mt-2 text-left">
							Eat smarter with fun, daily tools!
						</p>
						<img
							src="/images/banner.jpg"
							className="w-[95vw] lg:w-[90vw] rounded-[1rem] mt-6"
							alt=""
						/>
						{/* <p className="text-[1.75rem] mt-6">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sint
						magni asperiores non modi quae reprehenderit! Quas rerum velit
						dicta.
					</p> */}
					</div>
				</div>
				<div className="min-h-screen flex flex-col items-center justify-center">
					<h3 className="text-[1rem] lg:text-[1rem] xl:text-[1.5rem]">
						Who are we?
					</h3>
					<h2 className="lilita-one text-[1.5rem] lg:text-[2.5rem] xl:text-[3.5rem] text-center md:tracking-[-2px] leading-[2rem] lg:leading-[3.5rem] xl:leading-[4.5rem] w-[70vw] max-auto mb-8">
						We&apos;re on a mission to make eating well fun, simple, and
						guilt-free
					</h2>
					<Button text="Get Started" classes="" />

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-[95vw] lg:w-[90vw] mt-[8vh]">
						{["popcorn_frog", "happy_frog", "waving_frog", "mad2_frog"].map(
							(name) => (
								<img
									key={name}
									src={`/images/${name}.jpg`}
									className="aspect-square object-cover p-6 lg:p-8 xl:p-12 bg-white border-2 border-black rounded-[1rem]"
									alt=""
								/>
							)
						)}
					</div>
				</div>

				<div className="w-full flex justify-center pt-[15vh] ">
					<Pharagraph
						value="Lorem ipsum dolor sit, _image_ amet consectetur adipisicing elit. Sit sint
                    magni asperiores non _image2_ modi quae reprehenderit! Quas rerum velit
                    dicta. _image3_ Sit sint magni asperiores"
					/>
				</div>
			</div>
			<About />
			<div className="min-h-screen bg-[#68bc6d] flex flex-col items-center pt-[15vh]">
				<img
					src="/images/excited_frog.jpg"
					className="w-[30vh] h-[30vh] object-cover rounded-[10rem] bg-white p-[1rem] mb-[5vh]"
					alt=""
				/>
				<h2 className="lilita-one text-[1.5rem] lg:text-[2.5rem] xl:text-[3.5rem] text-center md:tracking-[-1px] leading-[2rem] lg:leading-[3.5rem] xl:leading-[4.5rem] w-[50vw] max-auto mb-8 text-white">
					Become a healthier version of yourself now!
				</h2>
				<a
					href="/"
					className="px-6 py-2 bg-white text-black text-[1.35rem] rounded-[0.5rem] cursor-pointer"
				>
					Get Started
				</a>
			</div>
		</div>
	);
};

export default LandingPage;
