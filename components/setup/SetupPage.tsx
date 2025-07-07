import React from "react";
import PersonalInfo from "./PersonalInfo";
import Measurements from "./Measurements";

const SetupPage = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[75vw] xl:w-[65vw] flex flex-col gap-[2vh] xl:gap-[3vh] 2xl:gap-[4vh] py-[4vh]">
				{/* 				<BMIcalc />
				 */}{" "}
				<h2 className="lilita-one text-[1.25rem] xl:text-[1.5rem]">
					Personal Information
				</h2>
				<PersonalInfo />
				<h2 className="lilita-one text-[1.25rem] xl:text-[1.5rem] mt-4">
					Measurements
				</h2>
				<Measurements />
			</div>
		</div>
	);
};

export default SetupPage;
