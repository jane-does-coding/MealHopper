import type { Metadata } from "next";
import { Lilita_One, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"], // optional, depending what you use
});

const lilitaOne = Lilita_One({
	variable: "--font-lilita-one",
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${lilitaOne.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
