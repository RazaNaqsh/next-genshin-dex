import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="flex h-fit justify-between bg-[#000000] px-6 items-center">
			<div className="flex">
				<Link href="/">
					<Image
						src="/genshinLogo.png"
						height={100}
						width={130}
						alt="logo"
						className="antialiased mr-4"
					/>
				</Link>
				<Link
					href="/"
					className="navLink"
				>
					Dex
				</Link>
				<Link
					href="/"
					className="navLink"
				>
					Explore
				</Link>
				<Link
					href="/"
					className="navLink"
				>
					Github
				</Link>
			</div>

			<div>
				<button className="text-sm px-12 py-3 rounded-full bg-blue-300 text-black mr-4 font-extralight h-full tracking-widest hover:bg-white transition-all">
					Sign Up
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
