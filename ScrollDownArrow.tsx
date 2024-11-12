import { useEffect, useState } from "react";

const ScrollDownArrow = () => {
	const [isHiidenArrow, setIsHiidenArrow] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsHiidenArrow(window.scrollY > 30);

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`${
				isHiidenArrow && "hidden"
			} animate-bounce text-4xl bottom-10 absolute left-1/2 -ml-4`}
		>
			👇
		</div>
	);
};

export default ScrollDownArrow;
