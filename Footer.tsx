import type { FC, ReactNode } from "react";
import Anchor from "./Anchor.tsx";

interface Props {
	leftContent?: ReactNode;
}

const Footer: FC<Props> = (props) => {
	return (
		<footer className="flex p-4 gap-4 bottom-0 w-screen justify-between">
			{props.leftContent}
			<span className="text-slate-500 font-medium ml-auto">
				{"Designed by "}
				<Anchor
					href="https://dbkoshin.com/"
					className="underline text-slate-500 font-medium"
				>
					koshin
				</Anchor>
			</span>
		</footer>
	);
};

export default Footer;
