import React from "react";

const Sidebar = () => {
	return (
		<div className="w-[20vw] bg-white shadow-md border-r-2 border-neutral-300 h-screen fixed flex flex-col items-start justify-start px-[2vw] py-[2vh]">
			<div className="flex flex-col items-start justify-start w-full">
				<h3 className="text-black lilita-one mb-4 text-[1.75rem] xl:text-[2rem]">
					MealHopper
				</h3>
				<a
					href="/dashboard"
					className="flex gap-4 items-center text-[1rem] xl:text-[1.25rem] w-full"
				>
					<img
						src="/images/happy_frog.jpg"
						className="w-[3rem] h-[3rem] xl:w-[4.5rem] xl:h-[4.5rem]"
						alt=""
					/>
					Dashboard
				</a>
				<a
					href="/setup"
					className="flex gap-4 items-center text-[1rem] xl:text-[1.25rem] w-full"
				>
					<img
						src="/images/running_frog.jpg"
						className="w-[3rem] h-[3rem] xl:w-[4.5rem] xl:h-[4.5rem]"
						alt=""
					/>
					Setup
				</a>
				<a
					href="/dashboard"
					className="flex gap-4 items-center text-[1rem] xl:text-[1.25rem] w-full"
				>
					<img
						src="/images/sleepy_frog.jpg"
						className="w-[3rem] h-[3rem] xl:w-[4.5rem] xl:h-[4.5rem]"
						alt=""
					/>
					Advices
				</a>
				<a
					href="/dashboard"
					className="flex gap-4 items-center text-[1rem] xl:text-[1.25rem] w-full mb-auto"
				>
					<img
						src="/images/mad_frog.jpg"
						className="w-[3rem] h-[3rem] xl:w-[4.5rem] xl:h-[4.5rem]"
						alt=""
					/>
					Calories
				</a>
			</div>

			<a
				href="/logout"
				className="flex gap-4 items-center text-[1rem] xl:text-[1.25rem] w-full mt-auto"
			>
				<img
					src="/images/sobbing_frog.jpg"
					className="w-[3rem] h-[3rem] xl:w-[4.5rem] xl:h-[4.5rem]"
					alt=""
				/>
				Log out
			</a>
		</div>
	);
};

export default Sidebar;
