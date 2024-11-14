import type { FC } from "react";
import Anchor from "./Anchor.tsx";

interface Props {
	name: string;
}

const HomeLink: FC<Props> = (props) => {
	return <Anchor href="/">{props.name}</Anchor>;
};

export default HomeLink;
