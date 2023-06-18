"use client";
import { useQuery } from "@tanstack/react-query";
import { charProps } from "@/types";

async function getCharacters() {
	const res = await fetch("https://genshinlist.com/api/characters");
	const characters = await res.json();
	return characters;
}

const page = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["characters"],
		queryFn: () => getCharacters(),
	});
	console.log(data);
	return (
		<div className="container m-auto py-10">
			<h1 className="text-4xl text-center">Character List</h1>
			<div className="grid grid-cols-4 gap-4">
				{data &&
					data.map((char: charProps) => (
						<div
							id={char.id}
							className="h-[300px] w-[350px] bg-blue-400"
						>
							<h3>{char.name}</h3>
						</div>
					))}
			</div>
		</div>
	);
};

export default page;
