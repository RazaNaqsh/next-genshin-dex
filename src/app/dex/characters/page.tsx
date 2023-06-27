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
			<div className="grid grid-cols-4 gap-4 py-4">
				{data &&
					data.map((char: charProps) => (
						<Link href={`dex/characters/${char.id}`}>
							<div
								id={char.id}
								className="h-[370px] w-[300px] bg-blue-400 rounded-3xl p-2 relative z-[-10]"
							>
								<div className="flex items-center">
									<Image
										src={`https://genshinlist.com/assets/img/characters/${char.name.toLowerCase()}.png`}
										alt={char.name}
										height={70}
										width={70}
										className="w-[90px] h-[90px] antialiased object-contain rounded-full shadow-xl"
									/>
									<h3 className="z-10 text-white bg-purple-700 w-full ml-1 mr-5 px-4 py-1 rounded-e-2xl">
										{char.name}
									</h3>
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
