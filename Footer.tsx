import type { FC, ReactNode } from "react";

interface Props {
	leftContent?: ReactNode;
}

const Footer: FC<Props> = (props) => {
	return (
		<footer className="flex p-4 bg-gray-50 gap-4 bottom-0 w-screen justify-between">
			{props.leftContent}
			<span className="text-slate-500 font-medium ml-auto">
				Designed by Koshin
			</span>
		</footer>
	);
};

export default Footer;
