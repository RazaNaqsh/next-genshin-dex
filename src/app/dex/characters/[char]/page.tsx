"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { charProps } from "@/types";

interface Props {
	params: {
		char: string;
	};
}

async function getCharacters() {
	const res = await fetch("https://genshinlist.com/api/characters");
	const characters = await res.json();
	return characters;
}

const page = ({ params }: Props) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["characters"],
		queryFn: () => getCharacters(),
	});

	if (data) console.log(data[params.char]);
	if (isLoading) {
		return <span>Loading....</span>;
	}
	if (isError) {
		<span>Error...</span>;
	}

	const charDataArr = data.filter((char: charProps) => char.id == params.char);
	const charData = charDataArr[0];
	console.log(charData);

	return (
		<div className="container">
			<div>
				<Image
					src={`https://genshinlist.com/assets/img/characters/${charData.name.toLowerCase()}.png`}
					alt={charData.name}
					height={70}
					width={70}
					className="w-[90px] h-[90px] antialiased object-contain rounded-full shadow-xl"
				/>
				<p>{charData.name}</p>
				<p>Rarity: {charData.rarity}</p>
				<p>Birthday : {charData.birthday} </p>
				<p>Vision : {charData.vision} </p>
				<p>Weapon : {charData.weapon} </p>
				<p>Desc : {charData.description}</p>
			</div>
		</div>
	);
};

export default page;
