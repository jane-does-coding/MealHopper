import React from "react";
import BMIcalc from "./BMIcalc";

const SetupPage = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="w-[75vw] 2xl:w-[65vw] flex flex-col gap-[2vw] xl:gap-[3vw] 2xl:gap-[4vw] py-[4vh]">
				<BMIcalc />
			</div>
		</div>
	);
};

export default SetupPage;
