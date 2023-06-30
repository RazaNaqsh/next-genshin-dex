"use client";
import { isError, useQuery } from "@tanstack/react-query";
import { charProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

async function getCharacters() {
	const res = await fetch("https://genshinlist.com/api/characters");
	const characters = await res.json();
	return characters;
}

const Character = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["characters"],
		queryFn: () => getCharacters(),
	});
	console.log(data);
	if (isLoading) {
		return <span>Loading....</span>;
	}
	if (isError) {
		<span>Error...</span>;
	}
	return (
		<div className="container m-auto py-10">
			<h1 className="text-4xl text-center">Character List</h1>
			<div className="grid grid-cols-4 gap-4 py-4">
				{data &&
					data.map((char: charProps) => (
						<Link
							href={`dex/characters/${char.id}`}
							key={char.id}
						>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{
									type: "spring",
									ease: "easeOut",
									damping: 10,
									bounce: 0.4,
								}}
								id={char.id}
								className="h-[370px] w-[300px] text-white bg-blue-400 rounded-3xl p-2 relative z-[-10]"
							>
								<div className="flex items-center">
									<Image
										src={`https://genshinlist.com/assets/img/characters/${char.name.toLowerCase()}.png`}
										alt={char.name}
										height={70}
										width={70}
										className="w-[90px] h-[90px] antialiased object-contain rounded-full shadow-xl"
									/>
									<h3 className="z-10  bg-purple-700 w-full ml-1 mr-5 px-4 py-1 rounded-e-2xl">
										{char.name}
									</h3>
								</div>
								<div className="p-2">
									<p className="pb-1">Rarity : {char.rarity} 🌟</p>
									<div className="space-y-1 text-sm pt-2 border-t-slate-100 border-t-2">
										<p>Birthday : {char.birthday} </p>
										<p>Vision : {char.vision} </p>
										<p>Weapon : {char.weapon} </p>
										<p>Desc : {char.description}</p>
									</div>
								</div>

								{/* https://genshinlist.com/assets/img/characters/diluc.png */}
							</motion.div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Character;
