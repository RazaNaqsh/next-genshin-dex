"use client";
import { useQuery } from "@tanstack/react-query";
import { weaponProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

async function getWeapons() {
	const res = await fetch("https://genshinlist.com/api/weapons");
	const weapons = await res.json();
	return weapons;
}

const Weapons = () => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["weapons"],
		queryFn: () => getWeapons(),
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
			<h1 className="text-4xl text-center">Weapon List</h1>
			<div className="grid grid-cols-4 gap-4 py-4">
				{data &&
					data.map((weapon: weaponProps) => (
						<Link
							href={`dex/weapons/${weapon.id}`}
							key={weapon.id}
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
								className="h-[370px] w-[300px] bg-green-400 rounded-3xl relative z-[-10] p-2 text-white"
							>
								<div className="flex items-center">
									<Image
										src={`https://genshinlist.com/assets/img/weapons/${weapon.name
											.toLowerCase()
											.replaceAll(" ", "-")}.png`}
										alt={weapon.name}
										height={70}
										width={70}
										className="w-[100px] h-[100px] antialiased object-cover rounded-full shadow-xl"
									/>
									<h3 className="z-10  bg-orange-600 w-full ml-1 mr-5 px-4 py-1 rounded-e-2xl">
										{weapon.name}
									</h3>
								</div>
								<div className="p-2">
									<p className="pb-1">Rarity : {weapon.rarity} 🌟</p>
									<div className="space-y-1 text-sm pt-2 border-t-slate-100 border-t-2">
										<p>Type : {weapon.type} </p>
										<p>Attack : {weapon.atk} </p>
										<p>Obtain : {weapon.obtain} </p>
									</div>
								</div>
							</motion.div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default Weapons;
