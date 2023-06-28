import Image from "next/image";
import Link from "next/link";
import React from "react";

const Description = () => {
	return (
		<div className="flex relative justify-center items-center pt-10">
			<div className="h-full absolute z-[-10] top-16">
				<Image
					src="/polybg.svg"
					alt="bg"
					width={0}
					height={0}
					sizes="100vw"
					className="w-[1920px] h-full object-cover"
				/>
			</div>
			<Image
				width={0}
				height={0}
				sizes="100vw"
				className="w-[500px] h-[500px] object-cover z-100"
				src="/paimon-grin.png"
				alt="char"
			/>
			<div className="text-black space-y-3 z-100">
				<h2 className="text-2xl">Welcome To</h2>
				<h1 className="text-5xl tracking-[2px]">Genshin Dex</h1>
				<p className="text-sm font-extralight w-[50ch] ml-16">
					Genshin Dex is a Tool where you can search any Character or Weapon
					Data!
				</p>
				<Link href="/about">
					<button className="ml-16 aqua-button border-2 hover:border-2  hover:scale-95 hover:border-gray-300">
						Learn More
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Description;
