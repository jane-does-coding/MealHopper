import React from "react";

const Button = ({ text, classes }: { text: string; classes: any }) => {
	return (
		<a
			href="/"
			className="px-6 py-2 bg-[#5CB360] text-white text-[1.15rem] rounded-[0.5rem] cursor-pointer"
		>
			{text}
		</a>
	);
};

export default Button;
