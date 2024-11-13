import Anchor from "./Anchor.tsx";
import type { FC } from "react";

interface Props {
	name: string;
}

const HomeLink: FC<Props> = (props) => {
	return <Anchor href="/">{props.name}</Anchor>;
};

export default HomeLink;
