import Sidebar from "@/components/Sidebar";
import SetupPage from "@/components/setup/SetupPage";
import React from "react";

const page = () => {
	return (
		<div>
			<div className="flex">
				<div className="w-[20vw]">
					<Sidebar />
				</div>
				<div className="w-[80vw]">
					<SetupPage />
				</div>
			</div>
		</div>
	);
};

export default page;
