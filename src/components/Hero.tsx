import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div className="relative">
			<Image
				src="/zhongli.jpg"
				alt="zhongli"
				width={0}
				height={0}
				sizes="100vw"
				className="w-full h-[75vh] object-cover"
			/>
			<div className="h-32 w-full bg-white block absolute -bottom-12 -rotate-3" />
		</div>
	);
};

export default Hero;
