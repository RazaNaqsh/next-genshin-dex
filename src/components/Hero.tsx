"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<div className="relative h-[75vh]">
			<Image
				src="/zhongli.jpg"
				alt="zhongli"
				width={0}
				height={0}
				sizes="100vw"
				className="w-full h-full absolute object-cover -z-10"
			/>
			<div className="h-32 w-[110vw] bg-white block absolute -bottom-12 -rotate-3" />

			<div className="flex-center flex-col h-full text-white">
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeInOut" }}
					className="text-8xl font-bold"
				>
					Genshin Dex
				</motion.h1>
				<Link href="/dex">
					<motion.button
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", damping: 8, delay: 0.5 }}
						className="aqua-button mt-4"
					>
						Get Started
					</motion.button>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
