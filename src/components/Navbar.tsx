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
				<button className="aqua-button">Sign Up</button>
			</div>
		</nav>
	);
};

export default Navbar;
