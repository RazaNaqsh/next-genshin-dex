"use client";
import { useQuery } from "@tanstack/react-query";
import { weaponProps } from "@/types";

async function getWeapons() {
	const res = await fetch("https://genshinlist.com/api/weapons");
	const characters = await res.json();
	return characters;
}

const page = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["weapons"],
		queryFn: () => getWeapons(),
	});
	console.log(data);
	return (
		<div className="container m-auto py-10">
			<h1 className="text-4xl text-center">Weapon List</h1>
			<div className="grid grid-cols-4 gap-4">
				{data &&
					data.map((weapon: weaponProps) => (
						<div
							id={weapon.id}
							className="h-[300px] w-[350px] bg-green-400"
						>
							<h3>{weapon.name}</h3>
						</div>
					))}
			</div>
		</div>
	);
};

export default page;
