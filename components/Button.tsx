import Link from "next/link";
import React from "react";

const Button = ({ text }: { text: string }) => {
	return (
		<Link
			href="/"
			className="px-6 py-2 bg-[#5CB360] text-white text-[1.15rem] rounded-[0.5rem] cursor-pointer"
		>
			{text}
		</Link>
	);
};

export default Button;
