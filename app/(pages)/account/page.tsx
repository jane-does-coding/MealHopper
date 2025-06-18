import Sidebar from "@/components/Sidebar";
import AccountPage from "@/components/account/AccountPage";
import React from "react";

const page = () => {
	return (
		<div>
			<div className="flex">
				<div className="w-[20vw]">
					<Sidebar />
				</div>
				<div className="w-[80vw]">
					<AccountPage />
				</div>
			</div>
		</div>
	);
};

export default page;
