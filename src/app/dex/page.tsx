import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Dex",
	description: "A Genshin Dex App Made with Next13",
};

const page = () => {
	return (
		<div className="py-12 flex-center gap-28 h-[80vh] text-white">
			<Link href="/dex/characters">
				<div
					className="card h-[400px] w-[300px] relative rounded-3xl bg-blue-300 flex items-end p-6 justify-center"
					style={{
						backgroundImage: ` url(/genshinChars.avif)`,
						backgroundPosition: "top",
					}}
				>
					<h3 className="text-2xl">Characters</h3>
				</div>
			</Link>
			<Link href="/dex/weapons">
				<div
					className="card h-[400px] w-[300px] rounded-3xl bg-green-300 flex items-end p-6 justify-center"
					style={{
						backgroundImage: ` url(/genshinWeapons.webp)`,
						backgroundPosition: "center",
					}}
				>
					<h3 className="text-2xl">Weapons</h3>
				</div>
			</Link>
		</div>
	);
};

export default page;
