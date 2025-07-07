import React from "react";

const Warning = ({ title, description }: any) => {
	return (
		<div className="w-full rounded-[1rem] bg-green-100 border-2 border-dashed border-green-400 px-[1rem] py-[0.5rem] flex gap-4 items-center justify-start">
			<img
				src="/images/mad3_frog.jpg"
				className="w-[4.5rem] h-[4.5rem] bg-white rounded-full p-[0.25rem]"
				alt=""
			/>
			<div className="">
				<h2 className="text-black font-semibold text-[1rem]">{title}</h2>
				<h3 className="text-neutral-600 text-[0.9rem]">{description}</h3>
			</div>
		</div>
	);
};

export default Warning;
