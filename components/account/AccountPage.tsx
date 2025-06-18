import React from "react";
import {
	FaFire,
	FaHeart,
	FaGem,
	FaScaleBalanced,
	FaLock,
} from "react-icons/fa6";

const AccountPage = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[75vw] 2xl:w-[65vw] flex gap-[2vw] xl:gap-[3vw] 2xl:gap-[4vw] py-[4vh]">
				<div className="w-7/10">
					<img
						src="/images/banner.jpg"
						className="w-full rounded-[1rem] mb-4"
						alt=""
					/>
					<div className="flex items-center justify-between">
						<h2 className="lilita-one text-[1.25rem] xl:text-[1.5rem]">
							Yevheniia
						</h2>
						<div className="flex gap-4">
							<a
								href=""
								className="flex gap-2 flex-col items-center justify-center"
							>
								<FaFire size={24} />
							</a>
							<a
								href=""
								className="flex gap-2 flex-col items-center justify-center"
							>
								<FaHeart size={24} />
							</a>
							<a
								href=""
								className="flex gap-2 flex-col items-center justify-center"
							>
								<FaGem size={24} />
							</a>
							<a
								href=""
								className="flex gap-2 flex-col items-center justify-center"
							>
								<FaScaleBalanced size={24} />
							</a>
						</div>
					</div>
					<p className="text-neutral-500">Yevheniia330508</p>
					<p className="pb-6 mb-4 border-b-2 border-neutral-300">
						Joined June 2023
					</p>
					<h2 className="lilita-one text-[1.25rem] xl:text-[1.5rem] mb-2">
						Statistics
					</h2>
					<div className="grid grid-cols-2 gap-4">
						<div className="rounded-[1rem] border-2 border-neutral-300 flex items-center justify-start py-[0.75rem] px-[1.25rem] gap-4">
							<div className="">
								<FaFire size={24} />
							</div>
							<div className="">
								<h2>21</h2>
								<h3>Lorem, ipsum.</h3>
							</div>
						</div>
						<div className="rounded-[1rem] border-2 border-neutral-300 flex items-center justify-start py-[0.75rem] px-[1.25rem] gap-4">
							<div className="">
								<FaFire size={24} />
							</div>
							<div className="">
								<h2>21</h2>
								<h3>Lorem, ipsum.</h3>
							</div>
						</div>
						<div className="rounded-[1rem] border-2 border-neutral-300 flex items-center justify-start py-[0.75rem] px-[1.25rem] gap-4">
							<div className="">
								<FaFire size={24} />
							</div>
							<div className="">
								<h2>21</h2>
								<h3>Lorem, ipsum.</h3>
							</div>
						</div>
						<div className="rounded-[1rem] border-2 border-neutral-300 flex items-center justify-start py-[0.75rem] px-[1.25rem] gap-4">
							<div className="">
								<FaFire size={24} />
							</div>
							<div className="">
								<h2>21</h2>
								<h3>Lorem, ipsum.</h3>
							</div>
						</div>
					</div>
					<h2 className="lilita-one text-[1.25rem] xl:text-[1.5rem] mb-2 mt-6">
						Achievements
					</h2>
					<div className="h-[20vh] w-full flex items-center justify-center bg-neutral-50 border-2 border-neutral-300 rounded-[1rem]">
						<div className="flex flex-col items-center justify-between translate-y-[-1rem]">
							{/* 							<FaLock size={26} />
							 */}
							<img
								src="/images/excited_frog_nobg.png"
								className="w-[6rem] h-[6rem]"
								alt=""
							/>
							<h3>Coming Soon</h3>
						</div>
					</div>
				</div>
				<div className="w-3/10">
					<div className="flex justify-between">
						<a
							href=""
							className="flex gap-2 flex-col items-center justify-center"
						>
							<FaFire size={24} /> 24
						</a>
						<a
							href=""
							className="flex gap-2 flex-col items-center justify-center"
						>
							<FaHeart size={24} /> 3
						</a>
						<a
							href=""
							className="flex gap-2 flex-col items-center justify-center"
						>
							<FaGem size={24} /> 4
						</a>
						<a
							href=""
							className="flex gap-2 flex-col items-center justify-center"
						>
							<FaScaleBalanced size={24} /> 32
						</a>
					</div>
					<div className="border-2 border-neutral-300 rounded-[1rem] py-[0.75rem] mt-6">
						<div className="flex items-center w-full gap-2  px-[0.75rem]">
							<div className="">
								<img
									src="/images/questioning_frog.jpg"
									alt=""
									className="w-[3rem]"
								/>
							</div>
							<div className="">
								<h2 className="text-[1.15rem]">Yevheniia</h2>
								<p className="text-neutral-500 text-[0.9rem]">2 hours</p>
							</div>
						</div>
						<p className="mt-4 pb-6 border-b-2 border-neutral-300  px-[0.75rem]">
							Earned total of 2,456 points
						</p>
						<h3 className=" px-[0.75rem] mt-[0.75rem]">
							Lorem ipsum dolor sit.
						</h3>
					</div>
					<div className="border-2 border-neutral-300 rounded-[1rem] py-[0.75rem] mt-6 px-[0.75rem]">
						<h3 className="mb-4 lilita-one text-[1.25rem]">Calories goal</h3>
						<p className="mb-2">982/1800</p>
						<div className="relative">
							<div className="w-[80%] absolute top-0 left-0 bg-[#68bc6d] rounded-full h-4"></div>
							<div className="w-full bg-neutral-200 rounded-full h-4"></div>
						</div>
					</div>
					<div className="border-2 border-neutral-300 rounded-[1rem] py-[0.75rem] mt-6 px-[0.75rem]">
						<h3 className="mb-4 lilita-one text-[1.25rem]">Todays Entry</h3>
						<div className="bg-neutral-50 py-2 px-4 border-b-2 border-neutral-300">
							<h3>Brocolli</h3>
							<p className="text-neutral-500">133 Cal</p>
						</div>
						<div className="bg-neutral-50 py-2 px-4 border-b-2 border-neutral-300">
							<h3>Chicken</h3>

							<p className="text-neutral-500">133 Cal</p>
						</div>
						<div className="bg-neutral-50 py-2 px-4 border-b-2 border-neutral-300">
							<h3>Rice</h3>
							<p className="text-neutral-500">133 Cal</p>
						</div>
						<div className="bg-neutral-50 py-2 px-4 border-b-0 border-neutral-300 text-center pt-2">
							<h3>View All </h3>
						</div>
						<button className="py-2 w-full bg-neutral-50 border-2 border-neutral-300 rounded-[1rem] mt-4">
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AccountPage;
