"use client";
import { isError, useQuery } from "@tanstack/react-query";
import { charProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getCharacters() {
	const res = await fetch("https://genshinlist.com/api/characters");
	const characters = await res.json();
	return characters;
}

const page = () => {
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
			<div className="grid grid-cols-4 gap-4">
				{data &&
					data.map((char: charProps) => (
						<Link href={`dex/characters/${char.id}`}>
							<div
								id={char.id}
								className="h-[350px] w-[300px] bg-blue-400 rounded-lg relative z-[-10]"
							>
								<div className="flex">
									<Image
										src={`https://genshinlist.com/assets/img/characters/${char.name.toLowerCase()}.png`}
										alt={char.name}
										height={70}
										width={70}
										className="antialiased object-contain"
									/>
									<h3 className="z-10 text-white">{char.name}</h3>
								</div>
								{/* https://genshinlist.com/assets/img/characters/diluc.png */}
							</div>
						</Link>
					))}
			</div>
		</div>
	);
};

export default page;
