"use client";
import React from "react";

const page = ({ params }: any) => {
	
	const { char } = params;

	console.log(char);

	return <div>char page :{char}</div>;
};

export default page;
