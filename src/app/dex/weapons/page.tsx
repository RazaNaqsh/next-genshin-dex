"use client";
import { useQuery } from "@tanstack/react-query";
import { weaponProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getWeapons() {
	const res = await fetch("https://genshinlist.com/api/weapons");
	const characters = await res.json();
	return characters;
}

const page = () => {
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
			<div className="grid grid-cols-4 gap-4">
				{data &&
					data.map((weapon: weaponProps) => (
						<Link href={`dex/weapons/${weapon.id}`}>
							<div
								id={weapon.id}
								className="h-[350px] w-[300px] bg-green-400 rounded-lg relative z-[-10]"
							>
								<div className="flex">
									<Image
										src={`https://genshinlist.com/assets/img/weapons/${weapon.name
											.toLowerCase()
											.replaceAll(" ", "-")}.png`}
										alt={weapon.name}
										height={70}
										width={70}
										className="antialiased object-cover"
									/>
									<h3 className="z-10 text-white">{weapon.name}</h3>
								</div>
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default page;
