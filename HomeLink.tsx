import type { FC } from "react";
import Anchor from "./Anchor.tsx";

interface Props {
	name: string;
}

const HomeLink: FC<Props> = (props) => {
	return <Anchor href="/" className="font-['Avenir_Next'] no-underline font-semibold text-xl">{props.name}</Anchor>;
};

export default HomeLink;
