"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";
import { weaponProps } from "@/types";

interface Props {
	params: {
		weapon: string;
	};
}

async function getWeapons() {
	const res = await fetch("https://genshinlist.com/api/weapons");
	const weapons = await res.json();
	return weapons;
}

const Weapon = ({ params }: Props) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["weapons"],
		queryFn: () => getWeapons(),
	});

	if (data) console.log(data);
	if (isLoading) {
		return <span>Loading....</span>;
	}
	if (isError) {
		<span>Error...</span>;
	}

	const weaponDataArr = data.filter(
		(weapon: weaponProps) => weapon.id == params.weapon
	);
	const weaponData = weaponDataArr[0];
	console.log(weaponData);

	return (
		<div className="container">
			<div>
				<Image
					src={`https://genshinlist.com/assets/img/weapons/${weaponData.name
						.toLowerCase()
						.replaceAll(" ", "-")}.png`}
					alt={weaponData.name}
					height={70}
					width={70}
					className="w-[100px] h-[100px] antialiased object-cover rounded-full shadow-xl"
				/>
				<p>{weaponData.name}</p>
				<p>Rarity: {weaponData.rarity}</p>

				<p>Type : {weaponData.type} </p>
				<p>Attack : {weaponData.atk} </p>
				<p>Obtain : {weaponData.obtain} </p>
			</div>
		</div>
	);
};

export default Weapon;
