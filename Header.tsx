import type { FC } from "react";
import HomeLink from "./HomeLink.tsx";
import SideMenu from "./SideMenu.tsx";

interface Home {
	name: string;
	url: string;
}

interface Props {
	homeName: string;
	subHome?: Home;
}

const Header: FC<Props> = (props) => {
	return (
		<header className="p-4">
			<nav className="flex justify-between">
				<div className="flex gap-2 items-center">
					<HomeLink name={props.homeName} />
					{props.subHome && (
						<>
							<span className="text-xl font-medium text-gray-300">/</span>
							<a href={props.subHome.url}>{props.subHome.name}</a>
						</>
					)}
				</div>
				<SideMenu />
			</nav>
		</header>
	);
};

export default Header;
