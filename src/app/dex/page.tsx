"use client";
import { motion } from "framer-motion";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className="py-12 flex-center gap-28 h-[80vh] text-white">
			<Link href="/dex/characters">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(0,100,255)" }}
					transition={{
						type: "spring",
						ease: "easeOut",
						damping: 10,
						bounce: 0.4,
					}}
					className="card h-[400px] w-[300px] relative rounded-3xl bg-blue-300 flex items-end p-6 justify-center"
					style={{
						backgroundImage: ` url(/genshinChars.avif)`,
						backgroundPosition: "top",
					}}
				>
					<h3 className="text-2xl">Characters</h3>
				</motion.div>
			</Link>
			<Link href="/dex/weapons">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(0,100,255)" }}
					transition={{
						type: "spring",
						ease: "easeOut",
						damping: 10,
						bounce: 0.4,
					}}
					className="card h-[400px] w-[300px] rounded-3xl bg-green-300 flex items-end p-6 justify-center"
					style={{
						backgroundImage: ` url(/genshinWeapons.webp)`,
						backgroundPosition: "center",
					}}
				>
					<h3 className="text-2xl">Weapons</h3>
				</motion.div>
			</Link>
		</div>
	);
};

export default page;
